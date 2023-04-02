const dotenv = require('dotenv');
dotenv.config();
const app = require('./app');

const port = process.env.PORT || 3000;

console.log(process.env.NODE_ENV);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
