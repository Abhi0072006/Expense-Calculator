## Quick orientation for AI coding agents

This repository is a small React + Express + MongoDB app for tracking expenses. Below are the repository-specific facts and examples an agent should use to be productive immediately.

- Project layout (key files):
  - `src/` — React app. Entry: `src/main.jsx`, root component: `src/App.jsx`, API wrapper: `src/services/api.js`, components in `src/components/` (e.g., `Dashboard.jsx`, `ExpenseTracker.jsx`, `Navbar.jsx`, `Sidebar.jsx`).
  - `server/` — Express backend. Entry: `server/index.js`, routes: `server/routes/users.js`, `server/routes/expenses.js`, model: `server/models/User.js`.
  - `package.json` — scripts: `dev` (vite), `build`, `preview`, `server`, `server:dev` (nodemon).

- Runtime & env specifics:
  - Backend listens on port `5000` by default. See `server/index.js` (uses `process.env.PORT || 5000`).
  - MongoDB URI is read from `process.env.MONGODB_URI` with fallback `mongodb://localhost:27017/expense-calculator`.
  - Frontend talks to a hard-coded API base in `src/services/api.js`: `http://localhost:5000/api`. Update that file when changing API host/port.

- Data model & API patterns (important):
  - The `User` document (see `server/models/User.js`) stores user-level fields and an embedded `expenses` array. Adding a new top-level field usually requires changing both the model and the frontend initial state in `src/App.jsx`.
  - The backend routes use upserts or find-and-update patterns: `GET /api/users/:userId` will create a user if missing, `PUT /api/users/:userId` replaces/updates user fields, `PATCH /api/users/:userId/financial` and `/goal` update parts of the document, and expenses are pushed/pulled into the `expenses` array (`POST /api/expenses/:userId`, `DELETE /api/expenses/:userId/:expenseId`).
  - Default user id used by the front-end: `DEFAULT_USER_ID = 'user_12345'` (see `src/services/api.js`).

- Frontend state patterns to follow:
  - `App.jsx` keeps a `data` object with nested `goal` and numeric fields. The `updateData` helper supports dot-path updates (e.g. `updateData('goal.itemPrice', 300)`). When changing state shape, update this logic and all components that call `updateData`.
  - Calculations derived from `data` are computed in `calculateMetrics()` inside `App.jsx`. Prefer adding derived values there rather than scattering logic across components.

- Developer workflows & useful commands
  - Install: `npm install`
  - Start frontend dev server: `npm run dev` (Vite — default port 5173; README sometimes mentions 3000 — verify locally).
  - Start backend server (dev): `npm run server:dev` (uses `nodemon server/index.js`, listens on 5000).
  - Quick health check: `GET http://localhost:5000/api/health` returns JSON `{ status: 'OK' }`.

- When making API changes
  - Mirror route changes in `src/services/api.js` and update any components using the affected calls.
  - If you change the `User` schema, update the backend model (`server/models/User.js`), the API responses, and `src/App.jsx` initial `data` shape.

- Integration & testing notes
  - No unit tests are present. Use the running dev servers and the health endpoint for smoke tests.
  - MongoDB must be running (local or Atlas). If using Atlas, set `MONGODB_URI` in a `.env` file at project root.

- Common gotchas observed during inspection
  - API base is hard-coded in `src/services/api.js` — consider switching to an env-based approach if running frontend and backend on different hosts.
  - README mentions frontend on port 3000 but Vite defaults to 5173; verify the actual dev URL when running.

Examples to reference when making edits:
  - Add a field to the user model: edit `server/models/User.js` + initialize / handle it in `src/App.jsx` and persist via `PUT /api/users/:userId`.
  - Add an expense endpoint change: edit `server/routes/expenses.js` and the corresponding call in `src/services/api.js` (`addExpense`, `fetchExpenses`, `deleteExpense`).

If any part of this is unclear or you want the agent to follow stricter rules (commit message formats, PR branch naming, or test additions), tell me which rules and I will incorporate them into this file.
