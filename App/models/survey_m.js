
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let serveySchema = new Schema({
  servey_title:{
      type: String,
      required: true,
  },
  servey_link:{
      type: String,
      required: true,
  },
  servey_type:{
    type: Number,
    required: true,//1- for evaluation 2-for meditations
}
},
{
    timestamps:true
}
)

const Servey = mongoose.model('Servey', serveySchema);
module.exports = Servey