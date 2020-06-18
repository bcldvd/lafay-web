import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { filter, switchMap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Workout, WorkoutDto } from './workouts.interfaces';

const collectionName = 'workouts';
const ownerIdPropName = 'ownerId';

@Injectable({
  providedIn: 'root',
})
export class WorkoutsService {
  constructor(
    private authService: AuthService,
    private afs: AngularFirestore
  ) {}

  getWorkouts() {
    return this.authService.user$.pipe(
      filter((user) => user != null),
      switchMap((user) => {
        return this.afs
          .collection<Workout>(collectionName, (ref) =>
            ref.where(ownerIdPropName, '==', user.uid)
          )
          .valueChanges();
      })
    );
  }

  async addWorkout(newWorkout: WorkoutDto) {
    const user = this.authService.user$.value;
    if (user.isAnonymous) {
      return;
    }

    const workout = {
      ...newWorkout,
      date: Date.now(),
      ownerId: user.uid,
    };
    return await this.afs.collection<Workout>(collectionName).add(workout);
  }
}
