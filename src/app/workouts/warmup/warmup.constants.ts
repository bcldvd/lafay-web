import { Session } from '../workouts.interfaces';

const TAKE_YOUR_BREATH_REST = 5;
const PUSHUP_REPS = 10;

export const session: Session = [
  {
    name: 'A',
    reps: PUSHUP_REPS,
    rest: TAKE_YOUR_BREATH_REST,
    sets: 1,
  },
  {
    name: 'E6',
    time: 60,
    rest: TAKE_YOUR_BREATH_REST,
    sets: 1,
  },
  {
    name: 'A',
    reps: PUSHUP_REPS,
    rest: TAKE_YOUR_BREATH_REST,
    sets: 1,
  },
  {
    name: 'E6',
    time: 120,
    rest: TAKE_YOUR_BREATH_REST,
    sets: 1,
  },
  {
    name: 'A',
    reps: PUSHUP_REPS,
    rest: TAKE_YOUR_BREATH_REST,
    sets: 1,
  },
];

export const sessionWithJumpingRope: Session = [
  {
    name: 'A',
    reps: PUSHUP_REPS,
    rest: TAKE_YOUR_BREATH_REST,
    sets: 1,
  },
  {
    name: 'C.a.S.',
    time: 60,
    rest: TAKE_YOUR_BREATH_REST,
    sets: 1,
  },
  {
    name: 'A',
    reps: PUSHUP_REPS,
    rest: TAKE_YOUR_BREATH_REST,
    sets: 1,
  },
  {
    name: 'C.a.S.',
    time: 120,
    rest: TAKE_YOUR_BREATH_REST,
    sets: 1,
  },
  {
    name: 'A',
    reps: PUSHUP_REPS,
    rest: TAKE_YOUR_BREATH_REST,
    sets: 1,
  },
];
