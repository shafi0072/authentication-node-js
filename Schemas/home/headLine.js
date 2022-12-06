const mongoose = require('mongoose');

const headLine = mongoose.Schema({
    sub_title:{
        type:String,
        require:true
    },
    title:{
      type:String,
      require:true
    },
    description:{
      type:String,
      require:true
    },
    file:String,
    link:String,
    vide_url:String,
    date:{
        type: Date,
        default: Date.now,
    }
})

module.exports = headLine;