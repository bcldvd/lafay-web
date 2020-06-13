export interface WorkoutDto {
  level: number;
  // exercises: Exercise[];
}

export interface Exercise {
  name: string;
  reps: number[];
  nbReps: number;
  bestMedian: number;
}

export interface Workout extends WorkoutDto {
  date: number;
  ownerId: string;
}
