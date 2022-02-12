const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());


// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;