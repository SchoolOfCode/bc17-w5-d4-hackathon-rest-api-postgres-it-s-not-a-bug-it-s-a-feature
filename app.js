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




// Artist Route Handlers

// Endpoint to retrieve all <artists>
app.get("/artists/", async function (req, res) {
  const artists = await getArtists();
  res.status(200).json({ status: "success", data: artists });
});

// Endpoint to retrieve an <artist> by id
app.get("/Artists/:id", async function (req, res) {
  const id = req.params.id;
  const artist = await getArtistById(id);
  // Assume 404 status if the artist is not found
  if (!artist) {
    return res
      .status(404)
      .json({ status: "fail", data: { msg: "Artist not found" } });
  }
  res.status(200).json({ status: "success", data: artist });
});

// Endpoint to create a new <artist>
app.post("/Artists/", async function (req, res) {
  const artist = req.body;
 // Check if the request body is empty or missing any required fields
  if (!artist || !artist.name || !artist.age || !artist.genre_id) {
      return res
      .status(404)
      .json({ status: "fail", data: { msg: "Incorrect input" } });
  }
// If the request body is valid, create a new <artist> and return it
  try {
    await createArtist(artist);

    res.status(200).json({ status: "success", data: artist });
    } catch {
    return res
    .status(500)
    .json({status: "fail", data: { msg: "Error accessing database" } })
  } 
});

// Endpoint to update a specific <artist> by id
app.patch("/Artists/:id", async function (req, res) {
});

// Endpoint to delete a specific <artist> by id
app.delete("/Artists/:id", async function (req, res) {
});




// Album Route Handlers

// Endpoint to retrieve all <albums>
app.get("/albums/", async function (req, res) {
    const albums = await getAlbums();
    res.status(200).json({ status: "success", data: albums });
  });
  
  // Endpoint to retrieve an <album> by id
  app.get("/Albums/:id", async function (req, res) {
    const id = req.params.id;
    const album = await getAlbumById(id);
    // Assume 404 status if the album is not found
    if (!album) {
      return res
        .status(404)
        .json({ status: "fail", data: { msg: "Album not found" } });
    }
    res.status(200).json({ status: "success", data: album });
});

  
  // Endpoint to create a new <album>
  app.post("/Albums/", async function (req, res) {
    const album = req.body;
 
    if (!album || !album.title|| !album.published_date  || !album.artist_id) {
        return res
        .status(404)
        .json({ status: "fail", data: { msg: "Incorrect input" } });
    }
  
    try {
      await createAlbum(album);
  
      res.status(200).json({ status: "success", data: album });
      } catch {
      return res
      .status(500)
      .json({status: "fail", data: { msg: "Error accessing database" } })
    } 
  });

  
  // Endpoint to update a specific <album> by id
  app.patch("/Albums/:id", async function (req, res) {
  });
  
  // Endpoint to delete a specific <album> by id
  app.delete("/Albums/:id", async function (req, res) {
  });





// Start the server and listen on the specified port
app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});