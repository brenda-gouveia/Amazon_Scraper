# Amazon Scraper

This project is a web application that scrapes product data from Amazon based on a keyword search. It consists of a backend server built with Express.js and a frontend built with Vite.

## Setup Instructions

### Prerequisites
- [Bun](https://bun.sh) (v1.2.6 or later)
- Node.js (optional, if not using Bun)
- [Vite](https://vitejs.dev) (for frontend development)
- A modern web browser

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Amazon_Scraper
   ```

2. Install dependencies for both backend and frontend:
   ```bash
   cd backend
   bun install
   cd ../frontend
   bun install
   ```

## Running the Application

### Backend
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Start the backend server:
   ```bash
   bun run index.js
   ```

   The server will run on `http://localhost:3000`.

### Frontend
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Start the Vite development server:
   ```bash
   bun run dev
   ```

   The frontend will run on `http://localhost:5173`.

## Usage

1. Open the frontend in your browser at `http://localhost:5173`.
2. Enter a keyword in the search bar and click the "Search" button.
3. The application will display a list of products scraped from Amazon.

## Notes
- Ensure that both the backend and frontend servers are running simultaneously.
- The backend includes a delay to avoid being blocked by Amazon. Scraping Amazon may violate their terms of service, so use this tool responsibly.

---

## Final Structure

After completing the setup, your project directory should look like this:

```
Amazon_Scraper/
├── backend/
│   ├── index.js
│   ├── package.json
│   └── node_modules/
├── frontend/
│   ├── index.html
│   ├── src/
│   │   ├── main.js
│   │   └── style.css
│   ├── package.json
│   └── node_modules/
├── README.md
└── .git/
```

---

## Original Instructions

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.2.6. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
