# Recipe Book Frontend

This is the frontend for the Recipe Book application, built with Next.js and TypeScript.

## Tech Stack

- Next.js
- TypeScript

## Getting Started

### Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start application

   ```bash
   npm run dev
   ```

### Available Scripts

- `dev`: Starts the application in development mode with hot-reloading
- `build`: Builds the application
- `start`: Starts the built application in production mode
- `format`: Formats the code using Prettier
- `lint`: Lints the code using ESLint and fixes issues

### Pages

#### Recipe List Page

- Displays a list of recipes fetched from the backend
- Each recipe item is clickable and navigates to the Recipe Info Page

#### Recipe Info Page

- Displays detailed information about a selected recipe, including:
  - Recipe image
  - Recipe name
  - Recipe country (clickable to filter by country)
  - Recipe instructions
  - Recipe ingredients (clickable to filter by ingredient)
- Right sidebar displays a list of recipes of the current recipe category (clickable to filter by category)
