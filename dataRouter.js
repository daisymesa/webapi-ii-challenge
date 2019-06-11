const express = require('express');
const Data = require('./data/db');

const router = express.Router();

// Creates a post using the information sent inside the request body.
router.post('/', async (req, res) => {
    try {

    } catch (error) {

    }
})

// Creates a comment for the post with the specified id using information sent inside of the request body.
router.post('/:id/comments', async (req, res) => {
    try {

    } catch (error) {

    }
})

// Returns an array of all the post objects contained in the database.
router.get('/', async (req, res) => {
    try {

    } catch (error) {

    }
})

// Returns the post object with the specified id.
router.get('/:id', async (req, res) => {
    try {

    } catch (error) {

    }
})

// Returns an array of all the comment objects associated with the post with the specified id.
router.get('/:id/comments', async (req, res) => {
    try {

    } catch (error) {

    }
})

// Removes the post with the specified id and returns the deleted post object. You may need to make additional calls to the database in order to satisfy this requirement.
router.delete('/:id', async (req, res) => {
    try {

    } catch (error) {

    }
})

// Updates the post with the specified id using data from the request body. Returns the modified document, NOT the original.
router.put('/:id', async (req, res) => {
    try {

    } catch (error) {

    }
})





module.exports = router;