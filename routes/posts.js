const express = require("express");
const router = express.Router();
const users = require("../data/users");
const posts = require("../data/posts");
const comments = require("../data/comments");
const error = require("../utilities/error");

router
  .route("/")
  .get((req, res) => {
    const links = [
      {
        href: "posts/:id",
        rel: ":id",
        type: "GET",
      },
    ];

    res.json({ posts, links });
  })
  .post((req, res, next) => {
    if (req.body.userId && req.body.title && req.body.content) {
      const post = {
        id: posts[posts.length - 1].id + 1,
        userId: req.body.userId,
        title: req.body.title,
        content: req.body.content,
      };

      posts.push(post);
      res.json(posts[posts.length - 1]);
    } else next(error(400, "Insufficient Data"));
  });

router
  .route("/:id")
  .get((req, res, next) => {
    const post = posts.find((p) => p.id == req.params.id);

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

    if (post) res.json({ post, links });
    else next();
  })
  .patch((req, res, next) => {
    const post = posts.find((p, i) => {
      if (p.id == req.params.id) {
        for (const key in req.body) {
          posts[i][key] = req.body[key];
        }
        return true;
      }
    });

    if (post) res.json(post);
    else next();
  })
  .delete((req, res, next) => {
    const post = posts.find((p, i) => {
      if (p.id == req.params.id) {
        posts.splice(i, 1);
        return true;
      }
    });

    if (post) res.json(post);
    else next();
  });

// GET /api/posts?userId=<VALUE>
// Retrieves all posts by a user with the specified userId.
/** Query Parameters
 * parameters appended to the end of a URL with a `?` separator
 */
// to access: http://localhost:3000/api/posts?userId=1&api-key=perscholas
router.route("/")
  .get((req, res) => {
    const user = users.find((u) => u.id == req.query.id);

    if (user) {
      const userPosts = posts.filter((post) => post.userId == req.query.id);

      const links = [
        {
          href: `/api/posts?${req.query.id}`,
          rel: "",
          type: "GET",
        }
      ];

      res.json({ userPosts, links });
    } else {
      next();
    }
  })

module.exports = router;
