import { config } from 'dotenv-safe';
import postgres from 'postgres';

config();
const sql = postgres();

export async function getSculptures() {
  const sculptures = await sql`
   SELECT * FROM sculptures`;
  return sculptures;
}
