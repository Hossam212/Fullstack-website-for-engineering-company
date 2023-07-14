const mongoose = require('mongoose');
const app = require('./app');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB Connected successfully'));

const server = app.listen(process.env.PORT || 3000, () =>
  console.log('Listening for requests on port 3000...')
);

process.on('unhandledRejection', (err) => {
  server.close(() => {
    process.exit(1);
  });
});
