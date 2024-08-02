import { pool } from "../index.js";

// >>> MAKE SURE YOU UNDERSTAND THIS FILE AND WHAT IT'S DOING <<<
// >>> FEEL FREE TO CHANGE IT TO MAKE YOUR OWN RESOURCES (TABLES AND PROPERTIES) - YOU DON'T HAVE TO USE ALBUMS AND ARTISTS <<<

async function resetDatabase() {
    try {
        // Drop existing tables if they exist. using same db as for book/authors, hence drop those tables as well
        await pool.query(`
        DROP TABLE IF EXISTS artists CASCADE;
        DROP TABLE IF EXISTS albums CASCADE;
        DROP TABLE IF EXISTS songs CASCADE;
        DROP TABLE IF EXISTS genres CASCADE;
      
        DROP TABLE IF EXISTS books CASCADE;
        DROP TABLE IF EXISTS authors CASCADE;
    `);

        // Create the artists table
        await pool.query(`
        CREATE TABLE artists (
            id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            age INT,
            genre_id INT REFERENCES genres(id)
        );
    `);

        // Create the albums table with a foreign key to the artists table
        await pool.query(`
        CREATE TABLE albums (
            id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            published_date DATE,
            artist_id INT REFERENCES artists(id)
        );
    `);
        // create  songs table with foreign key to albums table
        await pool.query(`
        CREATE TABLE songs (
            id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            duration INT,
            album_id INT,
            FOREIGN KEY (album_id) REFERENCES albums(id)
        );
    `);
        //Create the GENRES table
        await pool.query(`
        CREATE TABLE genres (
            id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            description TEXT;
     );
  `);

        // Seed the artists table
        await pool.query(`
        INSERT INTO artists (name, age, genre_id)
        VALUES 
            ('Dua Lipa', 25, 1),
            ('Jay-Z', 51, 2);
            ('The Beatles', 60, 3),
            ('Miles Davis', 65, 4);
    `);

        // Seed the albums table
        await pool.query(`
        INSERT INTO albums (title, published_date, artist_id)
        VALUES 
            ('Dua Lipa', '2017-06-02', 1),
            ('Future Nostalgia', '2020-03-27', 1),
            ('Reasonable Doubt', '1996-06-25', 2),
            ('The Blueprint', '2001-09-11', 2),
            ('Abbey Road', '1969-09-26', 3),
            ('Kind of Blue', '1959-08-17', 4);


    `);
        // Seed the songs table
        await pool.query(`
      INSERT INTO songs (title, duration, album_id)
      VALUES 
          ('New Rules', 190, 1),
          ('IDGAF', 204, 1),    
          ('Don''t Start Now', 183, 2),
          ('Levitating', 203, 2),
          ('Feeling Myself', 191, 3),
          ('Empire State of Mind', 281, 4),
          ('Come Together', 259, 5),
          ('Here Comes the Sun', 185, 5),
          ('So What', 622, 6),
          ('Freddie Freeloader', 521, 6);
  `);
        // Seed the genres table
        await pool.query(`
      INSERT INTO genres (name, description)
      VALUES 
          ('Pop', 'A genre known for its mainstream appeal and catchy melodies.' ),
          ('Hip-Hop', 'A genre known for its rhythmic music and rhyming speech.' ),
          ('Rock', 'A genre characterized by a strong rhythm and often revolves around the electric guitar.'),
          ('Jazz', 'A genre known for its complex harmonies and improvisational style.');
  `);
        console.log("Database reset successful");
    } catch (error) {
        console.error("Database reset failed: ", error);
    } finally {
        // End the pool
        await pool.end();
    }
}

await resetDatabase();
