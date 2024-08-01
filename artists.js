
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
}

export async function createArtist(resource) {
  // Query the database to create an resource and return the newly created resource
}

export async function updateArtistById(id, updates) {
  // Query the database to update the resource and return the newly updated resource or null
}

export async function deleteArtistById(id) {
  // Query the database to delete the resource and return the deleted resource or null
}