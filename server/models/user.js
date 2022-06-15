const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
   fullname:{type:String,required:true},
   mobile:{type:string,required:true},
    email:{type:String,require:true},
    password:{type:String,require:true},
});

module.exports = mongoose.model('user', userSchema, 'users');