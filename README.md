# CSC3916_HW3 - Movie API

This project implements a RESTful API for a movie database with JWT authentication.

## Requirements

- Node.js
- MongoDB Atlas account
- Postman (for testing)

## Setup

1. Clone the repository:
```bash
git clone https://github.com/villanicholas/CSC3916_HW3.git
cd CSC3916_HW3
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```
DB=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/moviedb
SECRET_KEY=your_strong_jwt_secret_key
PORT=8080
```

4. Seed the database with sample movies:
```bash
node seedMovies.js
```

5. Start the server:
```bash
node server.js
```

## API Documentation

### Authentication Endpoints

#### Sign Up
- **URL**: `/signup`
- **Method**: `POST`
- **Body**:
```json
{
  "name": "Your Name",
  "username": "your_username",
  "password": "your_password"
}
```
- **Success Response**: `201 Created`
- **Error Response**: `400 Bad Request`, `409 Conflict`, `500 Internal Server Error`

#### Sign In
- **URL**: `/signin`
- **Method**: `POST`
- **Body**:
```json
{
  "username": "your_username",
  "password": "your_password"
}
```
- **Success Response**: `200 OK` with JWT token
- **Error Response**: `401 Unauthorized`, `500 Internal Server Error`

### Movie Endpoints

All movie endpoints require JWT authentication with an Authorization header:
```
Authorization: JWT your_token_here
```

#### Get All Movies
- **URL**: `/movies`
- **Method**: `GET`
- **Success Response**: `200 OK` with array of movies
- **Error Response**: `500 Internal Server Error`

#### Create a Movie
- **URL**: `/movies`
- **Method**: `POST`
- **Body**:
```json
{
  "title": "Movie Title",
  "releaseDate": 2023,
  "genre": "Action",
  "actors": [
    {
      "actorName": "Actor Name",
      "characterName": "Character Name"
    }
  ]
}
```
- **Success Response**: `201 Created`
- **Error Response**: `400 Bad Request`, `500 Internal Server Error`

#### Get a Specific Movie
- **URL**: `/movies/:title`
- **Method**: `GET`
- **Success Response**: `200 OK` with movie object
- **Error Response**: `404 Not Found`, `500 Internal Server Error`

#### Update a Movie
- **URL**: `/movies/:title`
- **Method**: `PUT`
- **Body**: Same as create movie (partial updates allowed)
- **Success Response**: `200 OK` with updated movie
- **Error Response**: `400 Bad Request`, `404 Not Found`, `500 Internal Server Error`

#### Delete a Movie
- **URL**: `/movies/:title`
- **Method**: `DELETE`
- **Success Response**: `200 OK` with success message
- **Error Response**: `404 Not Found`, `500 Internal Server Error`

## Postman Collection

To test the API, you can use the Postman collection below. Click the "Run in Postman" button to import the collection.

[Replace this with your Postman Collection Embed Code]

### Instructions for testing with Postman:

1. Import the collection using the button above
2. Set up an environment with the following variables:
   - `base_url`: Your API URL (e.g., `https://csc3916-hw3-uqxh.onrender.com`)
   - `token`: (This will be automatically set after signin)
3. Run the requests in this order:
   - Sign Up
   - Sign In (automatically sets the token)
   - Get All Movies
   - Create/Update/Delete operations

## Deployment

This API is deployed at: [https://csc3916-hw3-uqxh.onrender.com](https://csc3916-hw3-uqxh.onrender.com)
