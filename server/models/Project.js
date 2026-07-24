const mongoose = require("mongoose");


const projectSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    },

    status:{
        type:String,
        required:true
    },

    deadline:{
        type:Date,
        required:true
    },

    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }

},
{
    timestamps:true
});


module.exports = mongoose.model("Project", projectSchema);