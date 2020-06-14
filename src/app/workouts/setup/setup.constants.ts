export enum STEPS {
  EQUIPMENT,
  DONE,
}

export interface StepMeta {
  name: string;
  validity?: boolean;
}

export interface StepsMeta {
  [key: number]: StepMeta;
}

export const stepsMeta: StepsMeta = {
  [STEPS.EQUIPMENT]: {
    name: 'Matériel disponible',
  },
  [STEPS.DONE]: {
    name: 'Résumé',
  },
};
