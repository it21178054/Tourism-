const mongoose = require('mongoose');


const EventSchema = new mongoose.Schema({

   name: {
        type: String,
        required: true,
      },

      date: {
        type: Date,
        required: true,
      },

      place: {
        type: String,
        required: true,
      },

      count:{
        type:Number,
        required:true,
      },
       
  

     email: {
    type: String,
    required: true,
  },

   telephone: {
    type: Number,
    required: true,
  },

  
  

  

})

module.exports= mongoose.model('Event',EventSchema);