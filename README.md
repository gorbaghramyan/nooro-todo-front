# Nooro Todo Web

Next.js 14 + TypeScript + Tailwind front-end for a Todo app.

## Prerequisites
- Node.js 20 or newer
- Next.js 14.2.5
- [nooro-todo-api](https://github.com/gorbaghramyan/nooro-todo-back) running at `http://localhost:4000`

## Setup
1. Clone and start the API:
   ```bash
   git clone https://github.com/gorbaghramyan/nooro-todo-back
   cd nooro-todo-api
   npm install
   npm run dev
   ```
2. Copy `.env.local.example` to `.env.local` and set `NEXT_PUBLIC_API_URL` if needed.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Build and start for production:
   ```bash
   npm run build
   npm start
   ```
