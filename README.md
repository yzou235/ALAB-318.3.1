## ALAB 318.3.1: Expanding a RESTfil API

1. `GET /api/users/:id/posts`

- Retrieves all posts by a user with the specified id.
- Related code: See `users.js` in the `routes` folder.
- To Access: http://localhost:3000/api/users/1/posts?api-key=perscholas

2. `GET /api/posts?userId=<VALUE>`

- Retrieves all posts by a user with the specified postId.
- Related code: See `comments.js` in the `routes` folder.
- To Access: http://localhost:3000/api/comments?api-key=perscholas

3. `GET /comments`

- Retrieves all comments.
- Related code: See `posts.js` in the `routes` folder.
- To Access: http://localhost:3000/api/posts?userId=1&api-key=perscholas

4. `POST /comments`

- When creating a new comment object, it should have the following fields:
  - id: a unique identifier.
  - userId: the id of the user that created the comment.
  - postId: the id of the post the comment was made on.
  - body: the text of the comment.

5. `GET /comments/:id`

- Retrieves the comment with the specified id.

6. `PATCH /comments/:id`

- Used to update a comment with the specified id with a new body.

7. `DELETE /comments/:id`

- Used to delete a comment with the specified id.

8. `GET /comments?userId=<VALUE>`

- Retrieves comments by the user with the specified userId.

9. `GET /comments?postId=<VALUE>`

- Retrieves comments made on the post with the specified postId.

10. `GET /posts/:id/comments`

- Retrieves all comments made on the post with the specified id.

11. `GET /users/:id/comments`

- Retrieves comments made by the user with the specified id.

12. `GET /posts/:id/comments?userId=<VALUE>`

- Retrieves all comments made on the post with the specified id by a user with the specified userId.

13. `GET /users/:id/comments?postId=<VALUE>`

- Retrieves comments made by the user with the specified id on the post with the specified postId.
