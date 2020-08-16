import { Session } from '../../workouts.interfaces';

export const level = '3';

const REST_REPS = 25;
const REST_2_MIN = 120;
const REST_3_MIN = 180;

export const session: Session = [
  {
    name: 'B2',
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
    name: 'C2',
    rest: REST_REPS,
    sets: 6,
    reps: 5,
    setRest: REST_3_MIN,
  },
  {
    name: 'E3',
    rest: REST_REPS,
    sets: 6,
    reps: 4,
    setRest: REST_2_MIN,
    side: 'right',
  },
  {
    name: 'E3',
    rest: REST_REPS,
    sets: 6,
    reps: 4,
    setRest: REST_2_MIN,
    side: 'left',
  },
  {
    name: 'F',
    rest: REST_REPS,
    sets: 4,
    reps: 4,
    setRest: REST_3_MIN,
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
];
