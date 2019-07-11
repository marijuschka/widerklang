const express = require('express');
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
})

const router = express.Router();
connection.connect();

//Get Posts
router.get('/', (req, res) => {
    res.send('hello');
})

//Add Post



//Delete Post

async function loadPostsCollection() {
    
    
}

module.exports = router;