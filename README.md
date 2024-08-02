Database Configuration:
As we're using the existing database design (Albums/Artists), run npm install to install all module dependencies
Create a .env file with 
DB_CONNECTION_STRING="your external database url here"
PORT=3000 
we are running on port 3000 localhost



Run the npm run reset-database command to check the database connection and ensure the reset script works without errors.

Start the app with npm run dev.
