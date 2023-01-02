const mongoose = require('mongoose');

const noteSchema = mongoose.Schema(
    {
        note: {
            type: String,
            required: [true, 'Please add a note value']
        }
    },

    {
        timestamps: true
    }
);

module.exports = mongoose.model('Note', noteSchema);
