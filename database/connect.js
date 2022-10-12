import { config } from 'dotenv-safe';
import postgres from 'postgres';

config();
const sql = postgres({
  transform: {
    ...postgres.camel,
    undefined: null,
  },
});

export async function getSculptures() {
  const sculptures = await sql`
   SELECT * FROM sculptures;
   `;
  return sculptures;
}

export async function getSculptureById(id) {
  const sculptures = await sql`
  SELECT * FROM sculptures WHERE id = ${id}
  `;
  return sculptures[0];
}
