export type Session = Exercise[];

export interface Exercise {
  name: string;
  image?: string;
  imageFull?: string;
  reps?: number;
  time?: number;
  rest: number;
}
