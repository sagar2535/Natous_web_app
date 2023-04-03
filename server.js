// eslint-disable-next-line import/no-extraneous-dependencies
const mongoose = require('mongoose');

const dotenv = require('dotenv');

dotenv.config();
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then((con) => {
    console.log(`Database Name : ${con.connection.name}`);
    console.log(`Connected to MongoDB successfully`);
  })
  .catch((err) => console.log(err));

const port = process.env.PORT || 3000;

console.log(`Node Enviornment is : ${process.env.NODE_ENV}`);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
