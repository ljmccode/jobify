import dotenv from 'dotenv';
dotenv.config();
import 'express-async-errors';

import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

// extra security packages
import helmet from 'helmet';
// import cors from 'cors';
import xxs from 'xss-clean';
import rateLimiter from 'express-rate-limit';

import express from 'express';
const app = express();

// connectDB
import connectDB from './db/connect.js';
import authenticateUser from './middleware/authentication.js';

// routers
import authRouter from './routes/auth.js';
import jobsRouter from './routes/jobs.js';

// error handler
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

app.set('trust proxy', 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 100,
  })
);

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use(express.json());
app.use(helmet());
// app.use(cors());
app.use(xxs());

// app.get('/', (req, res) => {
//   res.send('<h1>jobs API</h1><a href="/api-docs">Documentation</a>');
// });

// routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', authenticateUser, jobsRouter);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
