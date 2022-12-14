const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Get Notes!' });
});

router.post('/', (req, res) => {
    res.status(200).json({ message: 'Create Note!' });
});

router.put('/:id', (req, res) => {
    res.status(200).json({ message: `Update Note ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
    res.status(200).json({ message: `Delete Note! ${req.params.id}` });
});

module.exports = router;
