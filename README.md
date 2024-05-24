# Node.js Express Application

## Overview

This is a Node.js application built using the Express framework. It provides a RESTful API for managing players, including operations to create, retrieve, update, and delete player records.

## Features

- **Get all players**: Retrieve a list of all players.
- **Get player by ID**: Retrieve detailed information of a specific player by ID.
- **Create a new player**: Add a new player to the database.
- **Update player**: Update an existing player's information.
- **Delete player**: Remove a player from the database.

## Endpoints

- `GET /api/players`: Retrieve a list of all players.
- `GET /api/players/:id`: Retrieve details of a player by ID.
- `POST /api/players`: Create a new player.
- `DELETE /api/players/:id`: Delete a player by ID.
- `PATCH /api/players/:id`: Update a player's information.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/your-app.git
   cd your-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and set the following environment variable:
   ```env
   PORT=3000
   ```

### Running the Application

Start the server:
```bash
npm start
```

The server will start on the port defined in the `.env` file (default is 3000). You can access the API at `http://localhost:3000/api`.

## Project Structure

- `src/`
  - `controllers/`
    - `player-controller.ts`: Handles incoming HTTP requests and sends responses.
  - `models/`
    - `statistics-model.ts`: Defines the data model for player statistics.
  - `services/`
    - `players-services.ts`: Contains the business logic for player operations.
  - `routes/`
    - `index.ts`: Defines the routes and links them to the controller functions.
  - `app.ts`: Sets up the Express application and middleware.

## Example Requests

### Get All Players

```bash
curl -X GET http://localhost:3000/api/players
```

### Get Player by ID

```bash
curl -X GET http://localhost:3000/api/players/1
```

### Create a New Player

```bash
curl -X POST http://localhost:3000/api/players -H "Content-Type: application/json" -d '{
  "name": "John Doe",
  "team": "Team A",
  "position": "Forward",
  "statistics": {
    "goals": 10,
    "assists": 5
  }
}'
```

### Update a Player

```bash
curl -X PATCH http://localhost:3000/api/players/1 -H "Content-Type: application/json" -d '{
  "statistics": {
    "goals": 12,
    "assists": 6
  }
}'
```

### Delete a Player

```bash
curl -X DELETE http://localhost:3000/api/players/1
```

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Acknowledgements

- [Express](https://expressjs.com/)
- [Node.js](https://nodejs.org/)

---

Feel free to reach out if you have any questions or suggestions!
