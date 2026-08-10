import postgres from 'postgres'

const connectionString = process.env.DATABASE_URL
const sql = postgres(connectionString, {host: 'db.ocztrljoyaeqaqlwccxr.supabase.co', port: 5432, database: 'postgres', user: 'postgres'})

export default sql