import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './src/App';

const app = express();

app.use(express.static('build'));

app.get('*', (req, res) => {
  const appContent = ReactDOMServer.renderToString(<App />);
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My App</title>
      </head>
      <body>
        <div id="app">${appContent}</div>
        <script src="/client.js" defer></script>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:2003');
});
