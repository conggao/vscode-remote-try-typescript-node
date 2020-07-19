import app from './app';

const port = 3000;
const host = '0.0.0.0';

app.listen(port, host);
console.log(`Running on http://${host}:${port}`);
