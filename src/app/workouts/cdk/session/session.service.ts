import { Injectable } from '@angular/core';
import { EXERCISES_IMAGE_PATH, EXERCISES_META } from 'src/app/app.constants';
import { Session } from '../../workouts.interfaces';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor() {}

  mapSession(session: Session) {
    return session.map((exercise) => {
      exercise.image = `${EXERCISES_IMAGE_PATH}/${exercise.name}.png`;
      exercise.imageFull = `${EXERCISES_IMAGE_PATH}/${exercise.name}-full.png`;
      if (EXERCISES_META.hasOwnProperty(exercise.name)) {
        exercise.page = EXERCISES_META[exercise.name].page;
      }
      return exercise;
    });
  }

  private playSound(soundPath: string) {
    const audio = new Audio(soundPath);
    audio.play();
  }

  playExerciseDoneAudio() {
    this.playSound('/assets/exercise_done.mp3');
  }

  playRestDoneAudio() {
    this.playSound('/assets/rest_done.mp3');
  }
}
