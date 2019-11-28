const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = process.env.PORT || 5000;

app.use('/static', express.static(__dirname + '/static'));
app.set('view engine', "ejs");

app.use(express.json());


//L'url de ma basse de données mongo
const mongoUrl = "mongodb+srv://codintag:Sur@2510@cluster0-nc8pb.mongodb.net/test?retryWrites=true&w=majority";
//connection à mongoDb
mongoose.connect(mongoUrl, {
    dbName: "ugecam",
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log("mongodb connected ...");
}).catch((err) => {
    console.log(err);
});

app.use(cors());

// app.get('/admin', (req, res) => {
//     res.render('index');
// });

app.use('/', require('./routes/inscrit'));
app.use('/messages', require('./routes/contact'));

app.listen(port, () => {
    console.log(`The server is running on port ${port} ...`);
})