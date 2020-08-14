export interface Changelog {
  version: string;
  date: string;
  changes: Change[];
}

export interface Change {
  category: string;
  description: string;
  type: 'Nouveau' | 'Correction de Bug' | 'Amélioration';
}

export const changelog: Changelog[] = [
  {
    date: '14 Aout 2020',
    version: '0.6.0',
    changes: [
      {
        category: 'Exercices',
        description: `Ajout de boutons "-1" et "+1" pour rapidement ajuster le nombre de répétitions effectuées après chaque exercices 👌🏼`,
        type: 'Nouveau',
      },
    ],
  },
  {
    date: '20 Juillet 2020',
    version: '0.5.0',
    changes: [
      {
        category: 'Dernières séances',
        description: `Les dernières séances s'affichent maintenant avec les répétitions effectuées sur chaque exercice. Depuis la page d'accueil, seulement 3 sont affichées, avec un lien vers la page "Mes dernières séances", qui comprend toutes les séances !`,
        type: 'Nouveau',
      },
    ],
  },
  {
    date: '8 Juillet 2020',
    version: '0.4.1',
    changes: [
      {
        category: 'Exercices',
        description: `La taille des boutons, des répétitions et du timer ont été augmentées pour faciliter les séances 💪🏼`,
        type: 'Amélioration',
      },
    ],
  },
  {
    date: '4 Juillet 2020',
    version: '0.4.0',
    changes: [
      {
        category: 'Note de version',
        description: `Ajout d'une page "Note  de version" qui récapitule les changements et nouveautés !`,
        type: 'Nouveau',
      },
      {
        category: 'Profil',
        description: `Possibilité de changer de niveau depuis le profil pour les membres avancés, ou ceux qui acvaient déjà commencé la méthode en dehors de l'application 💪🏼`,
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
