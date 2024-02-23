const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

app.get("/test", (req, res) => res.type('html').send(test));

app.get("/contact", (req, res) => res.type('html').send(contact));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from Render! First page from Ondrasch</title>
  </head>
  <body>
    <section>
      Hello ladies and gentlemen!
    </section>
  </body>
</html>
`
const test = `
<!DOCTYPE html>
<html>
  <head>
    <title>Test from Render! First page from Ondrasch</title>
  </head>
  <body>
    <section>
      This is the test route!
    </section>
  </body>
</html>
`
const contact = `
<!DOCTYPE html>
<html>
  <head>
    <title>Test from Render! First page from Ondrasch</title>
  </head>
  <body>
    <section>
      <h1>This is the contact route!</h1>
    </section>
  </body>
</html>
`