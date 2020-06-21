import { Session } from '../../workouts.interfaces';

export const level = '1b';

const REST_2_MIN = 120;

export const session: Session = [
  {
    name: 'B',
    rest: REST_2_MIN,
    sets: 3,
  },
  {
    name: 'A1',
    rest: REST_2_MIN,
    sets: 3,
  },
  {
    name: 'D',
    rest: REST_2_MIN,
    sets: 1,
  },
  {
    name: 'C1',
    rest: REST_2_MIN,
    sets: 3,
  },
  {
    name: 'E',
    rest: REST_2_MIN,
    reps: 60,
    sets: 3,
  },
  {
    name: 'F',
    rest: REST_2_MIN,
    reps: 20,
    sets: 3,
  },
  {
    name: 'G',
    rest: REST_2_MIN,
    sets: 3,
  },
  {
    name: 'K2',
    rest: REST_2_MIN,
    reps: 12,
    sets: 3,
  },
];
