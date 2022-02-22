import {
  REST_1_MIN,
  REST_1_MIN_30,
  REST_2_MIN,
  REST_3_MIN,
  REST_4_MIN,
  REST_REPS,
} from '../../workouts.constants';
import { Session } from '../../workouts.interfaces';

export const level = '6';

export const session: Session = [
  {
    name: 'B1',
    rest: REST_REPS,
    sets: 6,
    setRest: REST_REPS,
  },
  {
    name: 'A3',
    rest: REST_REPS,
    sets: 6,
    reps: 4,
    setRest: REST_REPS,
  },
  {
    name: 'A2',
    rest: REST_REPS,
    sets: 6,
    setRest: REST_4_MIN,
  },
  {
    name: 'I',
    rest: REST_REPS,
    sets: 6,
    reps: 3,
    setRest: REST_REPS,
  },
  {
    name: 'C1',
    rest: REST_REPS,
    sets: 6,
    reps: 3,
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
    setRest: REST_1_MIN_30,
  },
  {
    name: 'H',
    rest: REST_REPS,
    sets: 6,
    setRest: REST_1_MIN,
  },
  {
    name: 'K2',
    rest: REST_1_MIN,
    reps: 12,
    sets: 3,
  },
  {
    name: 'Z',
    reps: 10,
    sets: 1,
  },
];
