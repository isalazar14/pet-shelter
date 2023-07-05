const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./Server/Routes/routes')
const cors = require('cors')

app.use(express.static(__dirname + '/public/dist/public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
mongoose.connect('mongodb://localhost/beltExamPets', {useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex: true});

routes(app);

const port = 8000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})