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
    date: '12 Novembre 2020',
    version: '0.8.0',
    changes: [
      {
        category: 'Général',
        description: `Votre application marche désormais sans connexion internet ! Vous pouvez donc aller faire du sport en exterieur avec le mode avion 🤩. Une fois de retour chez vous ou le réseau activé, la séance se sauvegardera !`,
        type: 'Nouveau',
      },
      {
        category: 'Dernières séances',
        description: `Vous pouvez maintenant supprimer une séance passée.`,
        type: 'Amélioration',
      },
    ],
  },
  {
    date: '16 Aout 2020',
    version: '0.7.0',
    changes: [
      {
        category: 'Niveaux',
        description: `Ajout des niveaux 3, 4 et 5 !`,
        type: 'Nouveau',
      },
    ],
  },
  {
    date: '14 Aout 2020',
    version: '0.6.0',
    changes: [
      {
        category: 'Exercices',
        description: `Ajout de boutons "-1" et "+1" pour rapidement ajuster le nombre de répétitions effectuées après chaque exercices 👌🏼`,
        type: 'Nouveau',
      },
      {
        category: 'Résumé de la séance',
        description: `À partir du niveau 2, l'objectif général est affiché à la place de la fréquence d'entrainement`,
        type: 'Amélioration',
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
