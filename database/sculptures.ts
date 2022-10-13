import { sql } from './connect';

// export const sculptures = [
//   { id: 1, name: 'Donatello', material: 'Plastic', price: 150 },
//   { id: 2, name: 'Moai', material: 'Stone', price: 500 },
//   { id: 3, name: 'Spider', material: 'Bronze', price: 700 },
//   { id: 4, name: 'Bean', material: 'Steel', price: 1200 },
//   { id: 5, name: 'Voyageur', material: 'Metal', price: 3350 },
// ];

export type Sculpture = {
  id: number;
  name: string;
  material: string;
  price: number;
};

// Get all sculptures
export async function getSculptures() {
  const sculptures = await sql<Sculpture[]>`
    SELECT * FROM sculptures;
`;
  return sculptures;
}

// Get a single sculpture by id
export async function getSculptureById(id: number | undefined) {
  if (!id) return undefined;
  const [sculpture] = await sql<Sculpture[]>`
    SELECT * FROM sculptures WHERE id = ${id}
  `;

  return sculpture;
}
