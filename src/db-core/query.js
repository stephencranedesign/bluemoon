import { Pool } from 'pg';
import config from 'config';

const pool = new Pool(config.get('db'));
export const query = (text, params = []) => pool.query(text, params);