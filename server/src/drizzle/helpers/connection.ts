import { Client } from 'pg'
import { neon } from '@neondatabase/serverless'

export const postgresLocalConnection = async () => {
  const client = new Client({
    host: <string>process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: <string>process.env.DB_USER,
    password: <string>process.env.DB_PASS,
    database: <string>process.env.DB_NAME,
  })
  await client.connect()
  return client
}

export const neonPostgressConnection = () => {
  const sql = neon(process.env.NEON_DB_URL)
  return sql
}
