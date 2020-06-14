import { Session } from '../session-plan/session.interface';

const TAKE_YOUR_BREATH_REST = 5;
const PUSHUP_REPS = 10;

export const session: Session = [
  {
    name: 'A',
    reps: PUSHUP_REPS,
    rest: TAKE_YOUR_BREATH_REST,
  },
  {
    name: 'E6',
    time: 60,
    rest: TAKE_YOUR_BREATH_REST,
  },
  {
    name: 'A',
    reps: PUSHUP_REPS,
    rest: TAKE_YOUR_BREATH_REST,
  },
  {
    name: 'E6',
    time: 120,
    rest: TAKE_YOUR_BREATH_REST,
  },
  {
    name: 'A',
    reps: PUSHUP_REPS,
    rest: TAKE_YOUR_BREATH_REST,
  },
];

export const sessionWithJumpingRope: Session = [
  {
    name: 'A',
    reps: PUSHUP_REPS,
    rest: TAKE_YOUR_BREATH_REST,
  },
  {
    name: 'C.a.S.',
    time: 60,
    rest: TAKE_YOUR_BREATH_REST,
  },
  {
    name: 'A',
    reps: PUSHUP_REPS,
    rest: TAKE_YOUR_BREATH_REST,
  },
  {
    name: 'C.a.S.',
    time: 120,
    rest: TAKE_YOUR_BREATH_REST,
  },
  {
    name: 'A',
    reps: PUSHUP_REPS,
    rest: TAKE_YOUR_BREATH_REST,
  },
];
