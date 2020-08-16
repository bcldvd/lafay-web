import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { filter, switchMap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Workout, WorkoutDto, Exercise, Session } from './workouts.interfaces';

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

  getWorkouts(limit = 10) {
    return this.authService.user$.pipe(
      filter((user) => user != null),
      switchMap((user) => {
        return this.afs
          .collection<Workout>(collectionName, (ref) =>
            ref
              .where(ownerIdPropName, '==', user.uid)
              .orderBy('date', 'desc')
              .limit(limit)
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

  getLowestAverageRep(exercise: Exercise) {
    let lowestAverageRep;
    exercise.effective.forEach((rep, idx) => {
      if (idx === 0) {
        lowestAverageRep = rep;
      } else if (rep < lowestAverageRep) {
        lowestAverageRep = rep;
      }
    });
    return lowestAverageRep;
  }

  setSessionFromPreviousLevel(
    baseSession: Session,
    previousLevelWorkouts: Workout[],
    exercisesToChange: string[]
  ) {
    const lastLevelWorkout = previousLevelWorkouts[0];
    const newBaseSession = [...baseSession];

    newBaseSession.forEach((exercise, index) => {
      if (exercisesToChange.includes(exercise.name)) {
        const lastLevelExercise = lastLevelWorkout.exercises.find(
          (lastWorkoutExercise) => lastWorkoutExercise.name === exercise.name
        );
        let lowestAverageRep = this.getLowestAverageRep(lastLevelExercise);
        newBaseSession[index].reps = lowestAverageRep++;
      }
    });

    return newBaseSession;
  }
}
