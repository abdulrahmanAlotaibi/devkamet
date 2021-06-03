import app from "./app";
require("dotenv").config();

/**
 *  When you deploy, the hosting provider such as (EC2, Heroku) will choose an  
    available port
 */
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
