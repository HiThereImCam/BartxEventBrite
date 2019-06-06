/*
    not sure what body-parser is
    go back and check

    not gonna have bcrypt just yet
*/
const express = require ('express');
const cors = require('cors');

const app = express();

app.use(cors());
const port = 8080;

app.listen(port, () => {
    console.log(`Server is up and listening on port ${port}`);
})