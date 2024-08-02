// Import the required modules
import express from "express";



//Import your helper functions for your first resource here
import {
  getArtists,
  getArtistById,
  createArtist,
  updateArtistById,
  deleteArtistById,
} from "./artists.js";


//Import your helper functions for your second resource here
import {
  getAlbums,
  getAlbumById,
  createAlbum,
  updateAlbumById,
  deleteAlbumById,
} from "./albums.js";



// Initialize the express app
const app = express();
// Retrieve the port number from environment variables
const PORT = process.env.PORT;

app.use(express.json()); // express.json() middleware is used to parse incoming JSON requests




// Resource One Route Handlers

// Endpoint to retrieve all <resource_one>
app.get("/artists/", async function (req, res) {
  const artists = await getArtists();
  res.status(200).json({ status: "success", data: artists });
});

// Endpoint to retrieve a <resource_one> by id
app.get("/Artists/:id", async function (req, res) {
  const id = req.params.id;
  const artist = await getArtistById(id);
  // Assume 404 status if the author is not found
  if (!artist) {
    return res
      .status(404)
      .json({ status: "fail", data: { msg: "Artist not found" } });
  }
  res.status(200).json({ status: "success", data: artist });
});

// Endpoint to create a new <resource_one>
app.post("/Artists/", async function (req, res) {
});

// Endpoint to update a specific <resource_one> by id
app.patch("/Artists/:id", async function (req, res) {
});

// Endpoint to delete a specific <resource_one> by id
app.delete("/Artists/:id", async function (req, res) {
});




// Resource Two Route Handlers

// Endpoint to retrieve all <resource_twos>
app.get("/albums/", async function (req, res) {
    const albums = await getAlbums();
    res.status(200).json({ status: "success", data: albums });
  });
  
  // Endpoint to retrieve a <resource_twos> by id
  app.get("/Albums/:id", async function (req, res) {
  });
  
  // Endpoint to create a new <resource_twos>
  app.post("/Albums/", async function (req, res) {
  });
  
  // Endpoint to update a specific <resource_twos> by id
  app.patch("/Albums/:id", async function (req, res) {
  });
  
  // Endpoint to delete a specific <resource_twos> by id
  app.delete("/Albums/:id", async function (req, res) {
  });





// Start the server and listen on the specified port
app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});