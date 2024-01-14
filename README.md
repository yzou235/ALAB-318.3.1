## ALAB 318.3.1: Expanding a RESTful API

### 1. `GET /api/users/:id/posts`

- Retrieves all posts by a user with the specified id.
- **Related Code:** See `users.js` in the `routes` folder.
- To Access: http://localhost:3000/api/users/1/posts?api-key=perscholas

### 2. `GET /api/posts?userId=<VALUE>`

- Retrieves all posts by a user with the specified postId.
- **Related Code:** See `posts.js` in the `routes` folder.
- To Access: http://localhost:3000/api/posts?userId=1&api-key=perscholas

### 3. `GET /comments`

- Retrieves all comments.
- **Related Code:** See `comments.js` in the `routes` folder.
- To Access: http://localhost:3000/api/comments?userId=1&api-key=perscholas

### 4. `POST /comments`

- When creating a new comment object, it should have the following fields:
  - id: a unique identifier.
  - userId: the id of the user that created the comment.
  - postId: the id of the post the comment was made on.
  - body: the text of the comment.
- **Related Code:** See `comments.js` in the `routes` folder.
- Has successfully tested it in POSTMAN.
  - Authorization - Type: "API Key"; Key: "api-key"; Value: "perscholas"; Add To: "Query Params"
  - raw Body in JSON:`{"userId": 3, "postId": 2, "content": "This is a test comment."}`

### 5. `GET /comments/:id`

- Retrieves the comment with the specified id.
- **Related Code:** See `comments.js` in the `routes` folder.
- To Access: http://localhost:3000/api/comments/1?api-key=perscholas

### 6. `PATCH /comments/:id`

- Used to update a comment with the specified id with a new body.
- **Related Code:** See `comments.js` in the `routes` folder.
- Has successfully tested it in POSTMAN.
  - raw Body in JSON: `{"content": "Updated content for comment 1, test."}`

### 7. `DELETE /comments/:id`

- Used to delete a comment with the specified id.
- **Related Code:** See `comments.js` in the `routes` folder.
- Has successfully tested it in POSTMAN.

### 8. `GET /comments?userId=<VALUE>`

- Retrieves comments by the user with the specified userId.
- **Related Code:** See `comments.js` in the `routes` folder.
  - used if statement and query parameter in the root route
- To Access: http://localhost:3000/api/comments?userId=1&api-key=perscholas

### 9. `GET /comments?postId=<VALUE>`

- Retrieves comments made on the post with the specified postId.
- **Related Code:** See `comments.js` in the `routes` folder.
  - used else if statement and query parameter in the root route
- To Access: http://localhost:3000/api/comments?postId=1&api-key=perscholas

### 10. `GET /posts/:id/comments`

- Retrieves all comments made on the post with the specified id.
- **Related Code:** See `posts.js` in the `routes` folder.
- To Access: http://localhost:3000/api/posts/1/comments?api-key=perscholas

### 11. `GET /users/:id/comments`

- Retrieves comments made by the user with the specified id.
- **Related Code:** See `users.js` in the `routes` folder.
- To Access: http://localhost:3000/api/users/1/comments?api-key=perscholas

### 12. `GET /posts/:id/comments?userId=<VALUE>`

- Retrieves all comments made on the post with the specified id by a user with the specified userId.
- **Related Code:** See `posts.js` in the `routes` folder.
- To Access: http://localhost:3000/api/posts/1/comments?userId=1&api-key=perscholas

### 13. `GET /users/:id/comments?postId=<VALUE>`

- Retrieves comments made by the user with the specified id on the post with the specified postId.
- **Related Code:** See `users.js` in the `routes` folder.
- To Access: http://localhost:3000/api/users/1/comments?postId=1&api-key=perscholas
