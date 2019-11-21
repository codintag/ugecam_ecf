const express = require('express');
const app = express();
const mongoose = require('mongoose');

const port = process.env.PORT || 5000;

//L'url de ma basse de données mongo
const mongoUrl = "mongodb+srv://codintag:Sur@2510@cluster0-nc8pb.mongodb.net/test?retryWrites=true&w=majority";
//connection à mongoDb
mongoose.connect(mongoUrl, {
    dbName: "codintag",
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log("mongodb connected ...");
}).catch((err) => {
    console.log(err);
});




app.use('/admin', require('./routes/inscrit'));
app.use('/admin/messages', require('./routes/usersMessages'));

app.listen(5000, () => {
    console.log(`The server is running on port ${port} ...`);
})