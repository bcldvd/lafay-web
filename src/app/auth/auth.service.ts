import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, User } from 'firebase/app';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$ = new BehaviorSubject<User>(null);

  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe((user) => {
      this.user$.next(user);
    });
  }

  async googleLogin() {
    return this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  async anonymousLogin() {
    return this.afAuth.signInAnonymously();
  }

  async login() {
    return this.googleLogin();
  }

  async logout() {
    return this.afAuth.signOut();
  }
}
