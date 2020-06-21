import { Session } from '../../workouts.interfaces';

export const level = '2';

const REST_REPS = 25;
const REST_3_MIN = 180;

export const session: Session = [
  {
    name: 'B1',
    rest: REST_REPS,
    sets: 6,
    reps: 5,
  },
  {
    name: 'A3',
    rest: REST_REPS,
    sets: 6,
    reps: 5,
  },
  {
    name: 'A2',
    rest: REST_REPS,
    sets: 6,
    reps: 5,
    setRest: REST_3_MIN,
  },
  {
    name: 'C1',
    rest: REST_REPS,
    sets: 6,
    reps: 5,
    setRest: REST_3_MIN,
  },
  {
    name: 'E',
    rest: REST_REPS,
    sets: 6,
    reps: 5,
    setRest: REST_3_MIN,
    side: 'left',
  },
  {
    name: 'E',
    rest: REST_REPS,
    sets: 6,
    reps: 5,
    setRest: REST_3_MIN,
    side: 'right',
  },
  {
    name: 'F',
    rest: REST_REPS,
    sets: 4,
    reps: 5,
    setRest: REST_3_MIN,
  },
  {
    name: 'G',
    rest: REST_REPS,
    sets: 6,
    reps: 10,
    setRest: 90,
  },
  {
    name: 'H',
    rest: REST_REPS,
    sets: 6,
    reps: 1,
    setRest: 60,
  },
  {
    name: 'K2',
    rest: 60,
    reps: 12,
    sets: 3,
  },
];
