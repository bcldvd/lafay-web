export type Session = Exercise[];

export interface Exercise {
  name: string;
  image?: string;
  imageFull?: string;
  reps?: number;
  time?: number;
  rest: number;
  sets: number;
  effective?: number[];
  skipEffective?: boolean;
}

export interface WorkoutDto {
  level: number;
  // exercises: Exercise[];
}

export interface Workout extends WorkoutDto {
  date: number;
  ownerId: string;
}
