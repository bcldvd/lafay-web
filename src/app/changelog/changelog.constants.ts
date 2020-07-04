export interface Changelog {
  version: string;
  date: string;
  changes: Change[];
}

export interface Change {
  category: string;
  description: string;
  type: 'Nouveau' | 'Correction de Bug';
}

export const changelog: Changelog[] = [
  {
    date: '4 Juillet 2020',
    version: '0.4.0',
    changes: [
      {
        category: 'Note de version',
        description: `Ajout d'une page "Note  de version" qui récapitule les changements et nouveautés !`,
        type: 'Nouveau',
      },
    ],
  },
  {
    date: '28 Juin 2020',
    version: '0.3.2',
    changes: [
      {
        category: 'Exercises',
        description: `Ajout d'un spinner pendant que les images des exercices chargent.`,
        type: 'Correction de Bug',
      },
    ],
  },
];
