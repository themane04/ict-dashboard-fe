# ICT Dashboard Frontend

This repository contains the frontend application for the ICT Dashboard, developed using Angular. It provides user authentication, a profile management interface, and a main dashboard view. The application is built with modern Angular practices, including standalone components and signals for state management.

## Features

*   **User Authentication**: Secure sign-up and sign-in functionality.
*   **Protected Routes**: Guards are implemented to restrict access to authenticated users.
*   **User Profile**: A dedicated page for users to view their profile information, including name, username, role, bio, and profile picture.
*   **Dashboard Layout**: A persistent, collapsible sidebar for easy navigation and a main content area.
*   **State Management**: Utilizes Angular Signals for reactive and efficient state management across the application.
*   **Dynamic UI**: The user interface adapts based on the authentication state and sidebar expansion.

## Tech Stack

*   **Framework**: [Angular](https://angular.dev/) (v20)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **State Management**: Angular Signals
*   **Styling**: SCSS with CSS Variables
*   **UI Components**: [Angular Material](https://material.angular.io/) for icons

## Project Structure

The source code is organized within the `src/app` directory, following a feature-based structure:

```
src/app/
├── core/             # Core logic, shared components, constants, and signals.
│   ├── components/   # Shared components like the sidebar.
│   ├── consts/       # Environment, API endpoints, and configuration constants.
│   └── signals/      # Global signals (e.g., layout state).
├── features/         # Feature modules for distinct application areas.
│   ├── auth/         # Authentication (sign-in, sign-up, guards, services).
│   ├── dashboard/    # Main dashboard page and related components.
│   └── profile/      # User profile page.
└── ...
```

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   Node.js (LTS version recommended)
*   npm (comes with Node.js)
*   Angular CLI (`npm install -g @angular/cli`)
*   A running instance of the [ICT Dashboard Backend](https://github.com/themane04/ict-dashboard-be) is required for the application to function correctly.

### Installation

1.  Clone the repository to your local machine:
    ```sh
    git clone https://github.com/themane04/ict-dashboard-fe.git
    cd ict-dashboard-fe
    ```

2.  Install the required npm packages:
    ```sh
    npm install
    ```

### Configuration

The backend API URL is configured in `src/app/core/consts/environment.ts`. By default, it is set to `http://localhost:5211`. If your backend is running on a different address, update the `backendUrl` and `backendApiUrl` properties in this file.

### Running the Application

1.  Start the development server:
    ```sh
    npm start
    ```
2.  Open your browser and navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Available Scripts

In the project directory, you can run the following scripts:

*   `npm start`: Runs the app in development mode.
*   `npm run build`: Builds the app for production to the `dist/` folder.
*   `npm test`: Executes the unit tests via Karma.
*   `npm run watch`: Builds the application and watches for file changes.
