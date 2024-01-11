# Argentina Magica

## Proyect Description

Welcome to the Argentina Magica Blog – your virtual gateway to the diverse landscapes, rich cultures, and vibrant experiences of Argentina. This blog serves as a comprehensive guide, inviting readers to embark on a journey through the enchanting regions of this amazing country.

### Key Features

- Manage Posts:

    - Users who create account can create they own post, edit and delete.
    - You can read all the posts even if dont have account.

- User Roles:

    - Guest: Can see all the post.
    - User with account: Can see all post and also create own posts and can edit and delete too.

## Demo

You can check the app here https://blog-frontend-80t9.onrender.com

## Getting Started

### Prerequisites

Before you begin, ensure you have the following prerequisites installed:

- Node.js: [Download Node.js](https://nodejs.org/)
- npm (Node Package Manager): [Download npm](https://www.npmjs.com/get-npm)

### Installation

For the Frontend App need to do this:

1. Clone the repository:

   ```bash
   git clone https://github.com/fcoronel89/blog.git

2. Navigate to the proyect directory:

    ```bash 
    cd blog/client

3. Install dependencies:

    ```bash
    npm install

4. Create '.env' file in the root folder and define the backend url

    ```bash
    VITE_BACKEND_URL = https://localhost:3000/v1 // change with the port you running the backend.
    VITE_FRONTEND_URL= http://localhost:5173/ // put the port your running the app

5. Start the development server:

    ```bash
    npm run dev

The proyect should now be running in http://localhost:5173 if the port is free

For the Backend App need to do this:

if you already installed the Frontend app can skip the first step

1. Clone the repository:

   ```bash
   git clone https://github.com/fcoronel89/blog.git

2. Navigate to the proyect directory:

    ```bash 
    cd blog/api

3. Install dependencies:

    ```bash
    npm install

4. Create '.env' file in the root folder and define the backend url

    ```bash
    PORT = 3000 // change with the port you running the backend.
    MONGO_URI=  // your data connection for your database in mongo
    FRONTEND_URL = http://localhost:5173 // change with the port your running your frontend
    API_URL: https://localhost:3000 // url where you running the backend
    JWT_SECRET: yourjwtsecretkey

5. Start the development server:

    ```bash
    npm start

The proyect should now be running in http://localhost:3000 if the port is free

## Usage

You can create your account with the Register button and start to create your own posts.
Check the different views and also in mobile.

## Frontend Technologies Used

- **ReactJS:** A powerful JavaScript library for building user interfaces, facilitating the creation of dynamic and responsive components.

- **TypeScript:** Adds static typing to the application, enhancing code quality, autocompletion, and catching potential errors during development.

- **React Router:** Ensures smooth navigation within the application, enabling the creation of a single-page application with multiple views.

- **React Query:** Enhances data fetching by providing a declarative API for fetching, caching, and updating data.

- **Render:** Utilize Render as our hosting solution, ensuring scalability, performance, and effortless deployment of our blog for the free demo too.

- **Material-UI:** A React UI framework that accelerates the development process with pre-designed components and styles. Using for the themes here too.

- **Vite:** A fast and efficient build tool for modern web development, chosen for its speed and enhanced development experience.

- **Sass:** A popular CSS preprocessor, used for more maintainable and structured stylesheets in the project.

## Backend Technologies

- **Node.js:** A runtime environment that enables server-side JavaScript, providing a scalable and non-blocking I/O platform for the backend.

- **Express.js:** A fast and minimalist web framework for Node.js, used to build the API endpoints and handle HTTP requests and responses.

- **MongoDB:** A NoSQL database that stores data in a flexible, JSON-like format, chosen for its scalability and ease of integration with Node.js applications.

- **Mongoose:** An ODM (Object Data Modeling) library for MongoDB and Node.js, simplifying interactions with the MongoDB database.

- **Cors:** Middleware used to enable Cross-Origin Resource Sharing, ensuring secure communication between the frontend and backend.

- **Helmet:** A security middleware for Express, adding HTTP headers to enhance the security of the application.

- **dotenv:** A zero-dependency module for loading environment variables, ensuring a secure and flexible configuration.

- **Nodemon:** A utility that automatically restarts the Node.js server upon file changes during development, improving the development workflow.

- **cookie-parser:** Middleware for parsing cookies, enhancing the handling of user sessions and authentication tokens..

- **Bcrypt:** Employed for password hashing, enhancing security and protecting user credentials.

- **jsonwebtoken:** Used for generating JSON Web Tokens (JWT) to secure authentication and authorization processes..

- **Multer:** Middleware for handling multipart/form-data, enabling the server to process file uploads seamlessly.

This stack was chosen to create a modern, efficient, and scalable web application for managing salon shifts seamlessly.


## Contributing

I welcome contributions from the community to improve and enhance this portfolio. Whether you've found a bug, have a feature request, or want to contribute code feel free to do it.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Contact Information

Connect with me on [LinkedIn](https://www.linkedin.com/in/fcoronel89) for professional inquiries and networking.

Explore more of my projects on [GitHub](https://github.com/fcoronel89) and feel free to open issues or pull requests.
