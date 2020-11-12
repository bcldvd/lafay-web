export type Session = Exercise[];

export interface Exercise {
  name: string;
  image?: string;
  imageFull?: string;
  reps?: number;
  time?: number;
  side?: 'left' | 'right';
  rest?: number;
  setRest?: number;
  sets?: number;
  effective?: number[];
  skipEffective?: boolean;
  page?: number;
}

export interface WorkoutDto {
  level: string;
  exercises: Exercise[];
}

export interface Workout extends WorkoutDto {
  date: number;
  ownerId: string;
  id?: string;
}
