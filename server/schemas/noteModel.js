const mongoose = require('mongoose');

const noteSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    note: {
      type: String,
      required: [true, 'Please add a Note value'],
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Note', noteSchema);
