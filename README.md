# Social Media

## Getting Started

Social Media is a social networking platform that allows users to create profiles, connect with friends, and share content.

### Prerequisites

- Node.js
- NPM
- pnpm
- PostgreSQL
- Gmail

### Installation

1. Clone the repository
2. Install dependencies
3. Create a .env file

   ```bash
   cp .env.example .env
   ```

4. Create a database

### Running the application

1. Run the migrations

   ```bash
   pnpm generate:migrate
   ```

2. Run App in dev mode
   ```bash
   pnpm dev
   ```

3. Run App in prod mode
   ```bash
   pnpm start
   ```
