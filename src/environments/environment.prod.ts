import { base } from './environment.base';

export const environment = {
  ...base,
  production: true,
  firebase: {
    apiKey: 'AIzaSyCIs4_DpTn1iihVGbKOVOSNy8PpN0n1OdA',
    authDomain: 'methode-lafay-261411.firebaseapp.com',
    databaseURL: 'https://methode-lafay-261411.firebaseio.com',
    projectId: 'methode-lafay-261411',
    storageBucket: 'methode-lafay-261411.appspot.com',
    messagingSenderId: '526193129845',
    appId: '1:526193129845:web:7c2bb785ff011fbee3fb3c',
    measurementId: 'G-HXTR2M48RW',
  },
  VAPIDPublicKey:
    'BCdkhHcQbwEUOVfLg8YtcTs6R7N97nTQQLzwZqFRUVjvsOzL-JMuv0-eJuHhcm8Q6RiHkH4p_02KAcII0Ak_CXI',
  notificationsServer: 'http://localhost:4201/notifications',
};
