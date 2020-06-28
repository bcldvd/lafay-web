import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SwPush } from '@angular/service-worker';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth/auth.service';
import { BehaviorSubject } from 'rxjs';
import { filter, switchMap, take, map } from 'rxjs/operators';
import { ownerIdPropName } from './profile/profile.service';

interface SelfPushSubscription {
  ownerId?: string;
  endpoint?: string;
  expirationTime?: number;
  keys?: Record<string, string>;
}

@Injectable({
  providedIn: 'root',
})
export class WebNotificationService {
  private baseUrl = 'http://localhost:4201/notifications';
  private fbCollection = 'subscriptions';
  public subscription$ = new BehaviorSubject<PushSubscription>(null);

  constructor(
    private http: HttpClient,
    private swPush: SwPush,
    private authService: AuthService,
    private afs: AngularFirestore
  ) {
    this.getSubscription().subscribe((subscription) => {
      this.subscription$.next(subscription);
      console.log(subscription);
    });
  }

  getSubscription() {
    return this.authService.user$.pipe(
      filter((user) => user != null),
      switchMap((user) => {
        return this.afs
          .collection<SelfPushSubscription>(this.fbCollection, (ref) =>
            ref.where(ownerIdPropName, '==', user.uid)
          )
          .valueChanges()
          .pipe(
            filter((subs) => subs.length > 0),
            take(1),
            map((subs) => {
              const { ownerId, ...sub } = subs[0];
              return (sub as unknown) as PushSubscription;
            })
          );
      })
    );
  }

  subscribe() {
    this.swPush
      .requestSubscription({
        serverPublicKey: environment.VAPIDPublicKey,
      })
      .then((sub) => this.persistSubscription(sub))
      .catch((err) =>
        console.error('Could not subscribe to notifications', err)
      );
  }

  private persistSubscription(sub: PushSubscription) {
    const user = this.authService.user$.value;
    console.log('sub', sub);
    if (!user.isAnonymous) {
      const selfSubscription = { ...sub.toJSON(), ownerId: user.uid };
      console.log('selfSubscription', selfSubscription);
      return this.afs
        .collection<SelfPushSubscription>(this.fbCollection)
        .add(selfSubscription);
    }
  }

  private notifySelf() {
    // this.http.post(this.baseUrl, { subscription }).subscribe();
  }
}
