const mongoose = require("mongoose");
const contactSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
  },
});

module.exports = mongoose.model("Contact", contactSchema);
