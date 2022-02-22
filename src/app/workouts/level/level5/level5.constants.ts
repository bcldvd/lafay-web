import { Session } from '../../workouts.interfaces';

export const level = '5';

const REST_REPS = 25;
const REST_2_MIN = 120;
const REST_3_MIN = 180;

export const session: Session = [
  {
    name: 'B',
    rest: REST_2_MIN,
    sets: 2,
    setRest: REST_3_MIN,
  },
  {
    name: 'A2',
    rest: REST_2_MIN,
    sets: 2,
    setRest: REST_3_MIN,
  },
  {
    name: 'C',
    rest: REST_2_MIN,
    sets: 2,
    setRest: REST_3_MIN,
  },
  {
    name: 'E2',
    rest: REST_REPS,
    sets: 6,
    reps: 8,
    setRest: REST_2_MIN,
    side: 'right',
  },
  {
    name: 'E2',
    rest: REST_REPS,
    sets: 6,
    reps: 8,
    setRest: REST_3_MIN,
    side: 'left',
  },
  {
    name: 'F',
    rest: REST_REPS,
    sets: 4,
    setRest: REST_2_MIN,
  },
  {
    name: 'G',
    rest: REST_REPS,
    sets: 6,
    setRest: 90,
  },
  {
    name: 'H',
    rest: REST_REPS,
    sets: 6,
    setRest: 60,
  },
  {
    name: 'K2',
    rest: 60,
    reps: 12,
    sets: 3,
  },
  {
    name: 'Z',
    reps: 10,
    sets: 1,
  },
];
