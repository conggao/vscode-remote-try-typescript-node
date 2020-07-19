import express, { Request, Response } from 'express';

const app = express();
app.get('/', (_req: Request, res: Response) => {
  res.send('Hello remote world!\n');
});

export default app;
