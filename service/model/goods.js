const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const goodsSchema = new Schema({
  id:{
    type:Number
  },
  category_id:{
    
  }
});
module.exports = mongoose.model("goods", goodsSchema);
