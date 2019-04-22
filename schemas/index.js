 let mongoose = require('mongoose');
 mongoose.connect('mongodb://localhost:27017/app',{useNewUrlParser: true});
 let Schema = mongoose.Schema;
 let User = new mongoose.Schema({
     key:{
        type: String,
        required: true,
        index: true,
        unique: true
     },
     name:{
        type: String,
        required: true,
     },
     title:{
        type: String,
        required: true,
     },
     enable:{
        type: String,
        required: true,
     },
     status:{
        type: String,
        required: true,
     },   
 },{ collection: 'app' })
 let UserBox = mongoose.model('app', User);
 export default  UserBox