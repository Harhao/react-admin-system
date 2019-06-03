const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const ObjectId = Schema.Types.ObjectId;
const userSchema = new Schema({
  uid: {
    type: ObjectId
  },
  name: {
    unique: true,
    type: String
  },
  phone: {
    type: String,
    default: ""
  },
  email: {
    type: String,
    default: ""
  },
  password: {
    type: String,
    default: ''
  },
  createAt: {
    type: Date,
    default: Date.now()
  },
  updateAt: {
    type: Date,
    default: Date.now()
  },
  lastLoginAt: {
    type: Date,
    default: Date.now()
  },
  role: {
    type: Number,
    default: 1
  }
});
module.exports = mongoose.model("user", userSchema);
