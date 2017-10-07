import { Pool } from 'pg';
import config from 'config';

const pool = new Pool(config.get('db'));

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  }
}

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
});