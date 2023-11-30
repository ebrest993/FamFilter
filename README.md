# Big Family Blues

Welcome to **Big Family Blues**, a text-based messaging application that allows users to communicate with each other through threads. This README provides an overview of the application's features and instructions on how to use it.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [User Story](#user-story)
- [Heroku Application](#heroku-application)

## Features

- **Login Screen**: Users are greeted with a login screen to enter their credentials upon opening the application.
- **Dashboard**: Displays all the threads the user belongs to after logging in.
- **Thread View**: Allows viewing all the messages from a selected thread.
- **Create New Thread**: Provides the ability to create a new thread and compose an initial message.
- **Add People**: Enables users to add people to a thread by member IDs.
- **Message Deletion**: Offers the option to delete messages within threads created by the user.

## Installation

Follow these steps to set up Big Family Blues locally:

1. Clone the repository:
git clone https://github.com/ebrest993/Big-Family-Blues.git`

3. Navigate to the project directory:
`cd Big-Family-Blues`

4. Install dependencies:
`npm install`

5. Start the application:
`npm start`

## Usage

Access the application in a web browser at `http://localhost:3000` once it's running. You can then log in, navigate threads, create new conversations, and manage messages.

## Contributing

Contributions are welcome!

To contribute:

1. Fork the repository.

2. Create a feature branch:
`git checkout -b feature/your-feature-name`

3. Commit your changes:
`git commit -m 'Add your feature'`

4. Push to the branch:
`git push origin feature/your-feature-name`

5. Create a pull request.

## License


## User Story

### Big Family Blues Workflow

#### User Interaction Flow within BFB's Text-Based Messaging Application

**As a user** of Big Family Blues,  
**I want to** effortlessly navigate and utilize the application's features,  
**So that** I can engage in threads, post messages, and efficiently manage my participation.

#### Acceptance Criteria

- **Initial Access**: Present a login screen upon app launch.
- **Successful Login**: Direct the user to a dashboard containing their threads after login.
- **Viewing a Thread**: Enable viewing of all messages in a thread when selected.
- **Creating a New Thread**: Allow the creation of a new thread with a form for the subject and message.
- **Posting a New Thread**: Provide the option to add participants when posting a new thread.
- **Managing Messages**: Grant the ability to delete messages in user-created threads.

#### Backend Requirements

- **User Management**:
- `PUT`: Update user information.
- `DELETE`: Remove an account.
- `POST`: Register a new user.

- **Form Management**:
- `POST`: Submit a new thread to the database.
- `GET`: Retrieve messages for a single post or dashboard view.
- `PUT`: Respond to a thread.
- `POST`: Create a new message in a thread.
- `DELETE`: Remove a specific message.

#### Heroku Application

The live application is hosted [here](https://famfilter-3864b8a8f81a.herokuapp.com/).
