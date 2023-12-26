# Project Title

## Description
This project offers a comprehensive platform for movie enthusiasts, featuring a robust comment system, user account management, and engaging social features.

## Services

### 1. CRUD Operations Service
- **Dedicated Service:** A specialized service for handling all CRUD operations related to movie data.
- **Functionalities:**
    - **Create:** Add new movies to the database.
    - **Read:** Retrieve information about existing movies.
    - **Update:** Modify details of movies in the database.
    - **Delete:** Remove movies from the database.

### 2. Movie Database Reading Service
- **Purpose:** Dedicated service for reading movie data, optimized for performance and scalability.
- **Features:**
    - **Access Movie Information:** Users can quickly and efficiently retrieve detailed information about movies.
    - **Search and Filter:** Advanced search and filtering capabilities to find movies based on various criteria.

## Features

### 1. User Registration and Login
- **User Registration:** Allows new users to create an account.
- **User Login:** Secure login functionality for returning users.

### 2. Comments API
- **API Endpoint:** `https://json-api-diqosh-cf992770784d.herokuapp.com/comments`
- **CRD Operations:** Create, Read, and Delete comments.
    - **Create Comment:**
        - POST request with JSON payload.
        - Example:
          ```json
          {
            "body": "Comment text",
            "postId": "post identifier",
            "author": "creator's nickname",
            "id": "unique comment identifier"
          }
          ```
    - **Read Comment:** Viewable on the detailed post page.
    - **Delete Comment:** Users can delete their comments.
    - **Access Control for Deletion:** Delete option visible only if the viewer's nickname matches the comment author's nickname.

### 3. Profile Management
- Users can update their profile information.
- **PATCH Request:** `https://json-api-diqosh-cf992770784d.herokuapp.com/users/{userID}`
    - Body:
      ```json
      {
        "name": "new name"
      }
      ```

### 4. Social Features
- **Share Movies with Telegram:** Feature to share movies directly to Telegram.
- **Likes/Dislikes:** Users can like or dislike movies to express their opinions and preferences.
