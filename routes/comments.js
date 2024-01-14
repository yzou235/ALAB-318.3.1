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
        // console.log("GET /comments route accessed");
        // res.json(comments);

        if (req.query.userId) {
            // GET /comments/:id
            // retrieve comments by the user with the specified userId
            const userComments = comments.filter(comment => comment.userId == req.query.userId);
            res.json(userComments);
        } else if (req.query.postId) {
            // GET /comments?postId=<VALUE>
            // Retrieves comments made on the post with the specified postId.
            const postComments = comments.filter(comment => comment.postId == req.query.postId);
            res.json(postComments);
        } else {
            res.json(comments);
        }

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

router
    .route('/:id')
    // GET /comments/:id
    // Retrieves the comment with the specified id
    .get((req, res) => {
        const comment = comments.find((c) => c.id == req.params.id);
        const links = [
            {
                href: `/${req.params.id}`,
                rel: "",
                type: "PATCH",
            },
            {
                href: `/${req.params.id}`,
                rel: "",
                type: "DELETE",
            },
        ];
        if (comment) res.json({ comment, links });
        else next();
    })
    .patch((req, res, next) => {
        const comment = comments.find((c, i) => {
            if (c.id == req.params.id) {
                for (const key in req.body) {
                    comments[i][key] = req.body[key];
                }
                return true;
            }
        });
        if (comment) res.json(comment);
        else next();
    })
    .delete((req, res, next) => {
        const comment = comments.find((c, i) => {
            if (c.id == req.params.id) {
                comments.splice(i, 1);
                return true;
            }
        });
        if (comment) res.json(comment);
        else next();
    });

// router
//     .get("/byUser", (req, res, next) => {
//         const userId = req.query.userId;
//         if (userId) {
//             const userComments = comments.filter((comment) => comment.userId == userId);
//             res.json(userComments);
//         } else {
//             next();
//         }
//     });

module.exports = router;