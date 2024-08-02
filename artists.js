
// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "./db/index.js";

export async function getArtists() {
  // Query the database and return all resource ones
  const SQLQUERY = 'SELECT * from artists';

  const result = await pool.query(SQLQUERY);

  return result.rows; 
}

export async function getArtistById(id) {
  // Query the database and return the resource with a matching id or null
  const SQLQUERY = 'SELECT * from artists WHERE id = $1';
  const result = await pool.query(SQLQUERY, [id]);
  return result.rows[0] || null;
}

export async function createArtist(resource) {
  // Query the database to create an resource and return the newly created resource
   // Query the database to create an author and return the newly created author
  // $1 and $2 are placeholders for the first_name and last_name values.
  // the values are passed as an array in the second argument of the pool.query function
  const SQLQUERY = 
    `INSERT INTO artists (name, age, genre_id)
    VALUES ($1, $2, $3)
    RETURNING *;`
  const result = await pool.query(SQLQUERY, [artists.name, artists.age, artists.genre_id]);
  //array is 0 because we are only returning one row that we just inserted. 
  //we'd have to change code to enter multiple authors and return multiple rows.
  return result.rows[0];
}

export async function updateArtistById(id, updates) {
  // Query the database to update the resource and return the newly updated resource or null
}

export async function deleteArtistById(id) {
  // Query the database to delete the resource and return the deleted resource or null
}