import path, {dirname} from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

import sqlRouter from './routes/sql.js'

const PORT = 3000;

//will parse all json
app.use(express.json());
//will break down queries in the requested URL.
//extended true (default value, but need to declare) uses the express qs library which allows nested objects to be passed as queries.
//exnteded false uses queryString library which is a simpler solution for basic usage
app.use(express.urlencoded({ extended: true }));

//static files
app.use(express.static(path.resolve(__dirname, '../client')));

//start writing route handlers here
app.use('/sql', sqlRouter);

// catch-all route handler for any requests to an unknown route
app.use('/:address', (req, res) => {
  console.log(req.params.address);
  res.status(404).send(`Nothing here at the catchall of ${req.params.address}`)
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});
  
//start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
  
export default app;
  