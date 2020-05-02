const express = require('express');
const cors = require ('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const userRoute = require('./routes/users');
const excerciseRoute = require('./routes/excercises');

app.use(cors());
app.use(express.json());
app.use('/users', userRoute);
app.use('/excercises/', excerciseRoute);

const uri = process.env.MONGO_ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB is connected :)");
})

app.listen(port, () => {
    console.log(`Server is now running on port ${port}`)
});