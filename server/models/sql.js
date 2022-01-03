import pkg from 'pg';
const {Pool} = pkg;

// In DB_URL.js have the following:
// const PG_URI = 'POSTGRESQL URL HERE';
// export default PG_URI
import PG_URI from '../../DB_URL'

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI
});

//function that console logs the query then calls it
const query = (text, params, callback) => {
  console.log('\n      Executed Query', text, '\n');
  return pool.query(text, params, callback);
}

export default query;