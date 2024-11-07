const mongoose = require("mongoose");
const gymSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: { type: String, required: true },
  singleEntryPrice: { type: Number, required: true },
  boulder: { type: Boolean, required: true },
  highWall: { type: Boolean, required: true },
});

module.exports = mongoose.model("Gyms", gymSchema);
