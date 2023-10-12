import mongoose from 'mongoose';

import app from './server';
import userRoutes from './infrastructure/routes/userRoutes';

const mongoUri = Bun.env.MONGODB_URL;

mongoose
  .connect(mongoUri)
  .then(() => {
    app.register(userRoutes);
    app.listen(
      { port: Bun.env.APP_PORT, host: Bun.env.APP_HOST },
      (err, address) => {
        if (err) {
          app.log.error(err);
          process.exit(1);
        }
        app.log.info(`Server is listening at ${address}`);
      },
    );
  })
  .catch((err) => {
    app.log.error(`Error connecting on MongoDB: ${err}`);
  });
