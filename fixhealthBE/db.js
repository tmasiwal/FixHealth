

const mongoose = require('mongoose');
require("dotenv").config();
const Connection = mongoose.connect(process.env.MONGODB_URL)
mongoose.set("debug", true);


module.exports =Connection