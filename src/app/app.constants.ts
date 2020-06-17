export const LAFAY_AMZN_LINK = 'https://amzn.to/2zwdb7N';
export const GITHUB_REPO = 'https://github.com/bcldvd/lafay-web';

export const EXERCISES_IMAGE_PATH = '/assets/exercises';

export interface ExerciseMeta {
  page?: number;
}

export interface ExercisesMeta {
  [key: string]: ExerciseMeta;
}

export const EXERCISES_META: ExercisesMeta = {
  A: {
    page: 138,
  },
  A1: {
    page: 139,
  },
  B: {
    page: 149,
  },
  C: {
    page: 152,
  },
  E6: {
    page: 169,
  },
  'C.a.S': {},
};
