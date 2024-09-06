import { defineConfig } from 'drizzle-kit'
import { config } from 'dotenv'

config({ path: '.env.development' })

export default defineConfig({
  schema: ['src/drizzle/schemas/*.ts'],
  dialect: 'postgresql',
  strict: true,
  verbose: true,
  out: 'drizzle-migrations',
  dbCredentials: {
    url: process.env.NEON_DB_URL,
    // host: <string>process.env.DB_HOST,
    // port: Number(process.env.DB_PORT),
    // user: <string>process.env.DB_USER,
    // password: <string>process.env.DB_PASS,
    // database: <string>process.env.DB_NAME,
    // ssl: false,
  },
})
