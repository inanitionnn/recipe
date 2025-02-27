# Recipe Book Backend

This is the backend for the Recipe Book application, built with [Nest.js](https://nestjs.com/) and TypeScript.The backend provides endpoints to fetch recipe data by integrating with the [MealDB API](https://www.themealdb.com/api.php).

## Tech Stack

- Node.js
- Nest.js
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

- `build`: Builds the application
- `start`: Starts the application
- `dev`: Starts the application in development mode with hot-reloading
- `prod`: Starts the built application in production mode
- `format`: Formats the code using Prettier
- `lint`: Lints the code using ESLint and fixes issues

### Swagger API documentation

Url: [localhost:3000/api](http://localhost:3000/api)

### API Endpoints

#### Get Available Recipes

- **List of All Available Recipes:** `GET /recipes`
- **List of Recipes Filtered By Ingredient:** `GET /recipes?ingredient=chicken_breast`
- **List of Recipes Filtered By Country:** `GET /recipes?country=Canadian`
- **List of Recipes Filtered By Category:** `GET /recipes?category=Seafood`

#### Get Recipe Info

- **Get Detailed Information About a Specific Recipe:** `GET /recipes/:id`
