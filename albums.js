
// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "./db/index.js";

export async function getAlbums() {
  // Query the database and return all resource twos
  const SQLQUERY = 'SELECT * from albums';

  const result = await pool.query(SQLQUERY);

  return result.rows; 
}

export async function getAlbumById(id) {
  // Query the database and return the resource with a matching id or null
  const SQLQUERY = 'SELECT * from albums WHERE id = $1';
  const result = await pool.query(SQLQUERY, [id]);
  return result.rows[0] || null;
}

export async function createAlbum(album) {
  // Query the database to create an resource and return the newly created resource
  const SQLQUERY = 
    `INSERT INTO albums (title, published_date, artist_id)
    VALUES ($1, $2, $3)
    RETURNING *;`
  const result = await pool.query(SQLQUERY, [album.title, album.published_date, album.artist_id]);
  return result.rows[0];
}

export async function updateAlbumById(id, updates) {
  // Query the database to update the resource and return the newly updated resource or null
}

export async function deleteAlbumById(id) {
  // Query the database to delete the resource and return the deleted resource or null
}