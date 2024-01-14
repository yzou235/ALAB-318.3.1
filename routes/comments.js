const express = require("express");
const router = express.Router();
const users = require("../data/users");
const posts = require("../data/posts");
const comments = require("../data/comments");
const error = require("../utilities/error");

router
    .route("/") // in index.js, we already set prefix "/api/comments"
    // GET /comments
    .get((req, res) => {
        console.log("GET /comments route accessed");
        res.json(comments);
    })
    // POST /comments
    .post((req, res) => {
        if (req.body.userId && req.body.postId && req.body.content) {
            const comment = {
                id: comments[comments.length - 1].id + 1,
                userId: req.body.userId,
                postId: req.body.postId,
                content: req.body.content,
            };

            comments.push(comment);
            res.json(comments[comments.length - 1]);
        } else res.json({ error: 'Insufficient Data' });
    });

module.exports = router;