// @desc Get Notes
// @route GET /api/notes
// @access Private
const getNotes = (req, res) => {
    res.status(200).json({ message: 'Get Notes!' });
};

// @desc SET Note
// @route POST /api/notes
// @access Private
const setNote = (req, res) => {
    res.status(200).json({ message: 'Create Notes!' });
};

// @desc UPDATE Note
// @route PUT /api/notes/:id
// @access Private
const updateNote = (req, res) => {
    res.status(200).json({ message: `Update Note ${req.params.id}` });
};

// @desc DELETE Note
// @route DELETE /api/notes/:id
// @access Private
const deleteNote = (req, res) => {
    res.status(200).json({ message: `Delete Note ${req.params.id}` });
};

module.exports = {
    getNotes,
    setNote,
    updateNote,
    deleteNote
};
