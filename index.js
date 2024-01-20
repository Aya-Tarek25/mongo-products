const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors')
const port = 8000;
const ProductRoute = require('./routes/ProductRoute.js');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
mongoose.connect('mongodb://127.0.0.1:27017/MEARNTRACK').then(() => {
    console.log("connect to db");
}).catch(err => {
    console.log(err);
})

app.use(cors())
app.use('/product', ProductRoute);




app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
});
