import postgres from 'postgres';

require('dotenv-safe').config();

declare module globalThis {
  let postgresSqlClient: ReturnType<typeof postgres> | undefined;
}

function connectOneTimeToDatabase() {
  if (!globalThis.postgresSqlClient) {
    globalThis.postgresSqlClient = postgres({
      transform: {
        ...postgres.camel,
        undefined: null,
      },
    });
  }
  return globalThis.postgresSqlClient;
}

export const sql = connectOneTimeToDatabase();

// export const sql = postgres({
//   transform: {
//     ...postgres.camel,
//     undefined: null,
//   },
// });

// export async function getSculptures() {
//   const sculptures = await sql`
//    SELECT * FROM sculptures;
//    `;
//   return sculptures;
// }
//
// export async function getSculptureById(id: number) {
//   const sculptures = await sql`
//   SELECT * FROM sculptures WHERE id = ${id}
//   `;
//   return sculptures[0];
// }
