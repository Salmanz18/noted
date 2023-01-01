const asyncHandler = require('express-async-handler');

// @desc Get Notes
// @route GET /api/notes
// @access Private
const getNotes = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get Notes!' });
});

// @desc SET Note
// @route POST /api/notes
// @access Private
const setNote = asyncHandler(async (req, res) => {
    if (!req.body.note) {
        res.status(400);
        throw new Error('Please add note field');
    }

    res.status(200).json({ message: 'Create Notes!' });
});

// @desc UPDATE Note
// @route PUT /api/notes/:id
// @access Private
const updateNote = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update Note ${req.params.id}` });
});

// @desc DELETE Note
// @route DELETE /api/notes/:id
// @access Private
const deleteNote = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete Note ${req.params.id}` });
});

module.exports = {
    getNotes,
    setNote,
    updateNote,
    deleteNote
};
