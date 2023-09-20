const mongoose = require('mongoose');

const currentDate = new Date();

const year = currentDate.getFullYear();
const month = currentDate.getMonth();
const day = currentDate.getDate();

const postSchema = mongoose.Schema({
    name:{type:String,required:true},
    location:{type:Number,required:true},
    description:{type:String,required:true},
    PostImage:{type:String,required:true},
    name:{type:String,required:true},
    date:{type:Number,default:[{ day }, { month }, { year }]},

},{timestamps:true});

const User = mongoose.model('User',postSchema);
module.exports = User;