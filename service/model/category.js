const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const categorySchema = new Schema({
    id: {
        type: Number
    },
    parent_id: {
        type: Number
    },
    name: {
        type: String,
        default: ''
    },
    status: {
        type: Boolean,
        default: false
    },
    create_time: {
        type: Date,
        default: Date.now()
    },
    update_time: {
        type: Date,
        default: Date.now()
    }
});
module.exports = mongoose.model("category", categorySchema);
