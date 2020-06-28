const express = require('express');
const cors = require('cors');
const webPush = require('web-push');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());

app.use(bodyParser.json());

const publicVapidKey = process.env.PUBLIC_VAPID_KEY;
const privateVapidKey = process.env.PRIVATE_VAPID_KEY;

webPush.setVapidDetails(
  'mailto:bcldvd@gmail.com',
  publicVapidKey,
  privateVapidKey
);

app.post('/notifications', (req, res) => {
  const subscription = req.body.subscription;

  console.log(`Subscription received`);

  res.status(201).json({});

  const payload = JSON.stringify({
    notification: {
      title: 'Test notification',
      body: 'This will be super nice !!',
      icon:
        'https://lafay-web.vercel.app/assets/icons/android-chrome-192x192.png',
      vibrate: [100, 50, 100],
      data: {},
    },
  });

  webPush
    .sendNotification(subscription, payload)
    .catch((error) => console.error(error));
});

app.set('port', process.env.PORT || 4201);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
