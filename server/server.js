const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const routes = require('./routes/routes');

const app = express();
const port = process.env.PORT || 5010;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, 
    { useNewUrlParser: true, 
        useCreateIndex: true, 
        useUnifiedTopology: true, 
        useFindAndModify: false });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB connection established successfully');
});

app.use(routes);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});