const mongoose = require("mongoose")

const database = new mongoose.Schema({
    name:{
        type:String
    },
    roll_number:{
        type:Number,
        required:true
    },
    address:{
        type:String
    }
})

module.exports = mongoose.model("crud",database)