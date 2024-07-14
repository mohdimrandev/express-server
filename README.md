# Express Server

This project is a robust Express server developed using TypeScript. It is designed to efficiently handle form submissions and store the submitted data in a JSON file. The server is built with scalability and maintainability in mind, leveraging TypeScript's static typing to ensure code reliability and ease of debugging. This setup provides a solid foundation for managing form data and integrating with various frontend applications.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Endpoints](#endpoints)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
  - [Clone the repository](#1-clone-the-repository)
  - [Install dependencies](#2-install-dependencies)
- [Running the Server](#running-the-server)
  - [Development](#development)
  - [Production](#production)
- [Usage](#usage)
- [Integration](#integration)
- [Video](#video)

## Introduction

The Express server project aims to deliver a foundational backend server utilizing Express and TypeScript. It is designed to manage form submissions by storing the submitted data in a JSON file and providing a set of endpoints for interacting with these submissions. This project aims to offer a reliable and efficient backend solution that can be easily integrated with [Windows Form applications](https://github.com/mohdimrandev/Windows-Form-App), ensuring smooth data handling and storage.

## Features

- Save form submissions
- Retrieve saved submissions
- CRUD Operations: Supports Create, Read, Update, and Delete operations for form submissions.
- Search by Email: Allows searching for submissions based on email addresses.
- RESTful API: Implements REST endpoints (/submit, /read, /delete, /search, /edit) for CRUD operations on form submissions.

## Endpoints

- `GET /ping` - Always returns true
- `POST /submit` - Save a submission with parameters name, email, phone, github_link, and stopwatch_time
- `GET /read` - Retrieve saved submissions
- `DELETE /delete` - Delete a submission by email
- `GET /search` - Search submissions by email
- `PUT /edit/:email` - Edit a submission by email

## Technologies Used

### Languages:

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

### Libraries:

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

### REST API Design:

![HTTTP-RESTAPI](https://img.shields.io/badge/HTTP-RESTAPI-%23189fdd.svg?style=for-the-badge&logo=HTTP-RESTAPI&logocolor=black)

### Tools:

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)

## Prerequisites

### Before running this project locally, ensure you have the following installed:

- Node.js: You can download it from the official website at [https://nodejs.org/](https://nodejs.org/).
- NPM (Node Package Manager): Comes with Node.js. Verify by running `npm -v`.
- An IDE such as Visual Studio Code: You can download it from [https://code.visualstudio.com/](https://code.visualstudio.com/).

Note: Express, TypeScript, and other necessary packages are specified in the `package.json` file and will be installed during the setup process.

## Setup

### 1. Clone the repository

- Clone the repository using the following command:

  ```cmd
  git clone https://github.com/mohdimrandev/express-server.git
  ```

### 2. Navigate to the project directory

- Change to the project directory using the following command:

  ```cmd
  cd express-server
  ```

### 3. Install dependencies

- Run the following command in the project directory to install the required dependencies from `package.json`.

  ```cmd
  npm install
  ```

## Running the Server

- Start the server in development or production mode based on your requirements

### Development

- Start the server using ts-node for development:

  ```cmd
  npm start
  ```

### Production

- To run the server in a production environment, follow these steps:

1. **Build the TypeScript code:**

   ```cmd
   npm run build
   ```

This command compiles TypeScript code into JavaScript, placing the output in a dist/ directory by default.

2. **Start the server using Node.js:**

   ```cmd
   npm run prod
   ```

This command runs the compiled JavaScript files using Node.js. It's suitable for deploying your application in a production environment.

By building the TypeScript code (npm run build) before running in production (npm run prod), you ensure that the code is optimized and ready for deployment, utilizing Node.js to execute the compiled JavaScript files efficiently.

## Usage

- Access the backend Express server via http://localhost:3000.

- Use the provided API endpoints to perform CRUD operations on form submissions:

### API Endpoints

- `GET /ping` - Check server status.
- `POST /submit` - Submit a new form entry with parameters: name, email, phone, github_link, and stopwatch_time.
- `GET /read` - Retrieve all form submissions.
- `DELETE /delete` - Delete a form submission by email.
- `GET /search` - Search form submissions by email.
- `PUT /edit/:email` - Update a form submission by email.

## Integration

To integrate the Windows Form Application with the Express server:

1. Ensure the Express server is running and accessible.
2. The Windows Form Application is already configured to make HTTP requests to the appropriate endpoints (POST /submit, GET /read, etc.).
3. The application is set up to handle responses from the server and update the UI accordingly.

This setup allows for seamless interaction between the frontend application and the backend server, facilitating efficient management of form submissions. Adjustments may be needed based on specific project requirements or further customization of functionality.

## Video

[Demo Video](https://youtu.be/bUQKV-BeuJ8)
