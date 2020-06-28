// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { base } from './environment.base';

export const environment = {
  ...base,
  production: false,
  firebase: {
    apiKey: 'AIzaSyDUlgDav77USqlWJZE63J_2cbsMBIuAdlE',
    authDomain: 'lafay-60149.firebaseapp.com',
    databaseURL: 'https://lafay-60149.firebaseio.com',
    projectId: 'lafay-60149',
    storageBucket: 'lafay-60149.appspot.com',
    messagingSenderId: '425841543550',
    appId: '1:425841543550:web:73ed73d6dd548fbb7a4b2f',
    measurementId: 'G-LNTJF9S5Z1',
  },
  VAPIDPublicKey:
    'BGVvh8Vb4_0OG2-s2mVuTOOufSvsqQRYI8a3PgdIhPQj_3R7EyQ41I2vrNseVgI2VtOzVrRbz90Occzfyq2uuBI',
  notificationsServer: 'http://localhost:4201/notifications',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
