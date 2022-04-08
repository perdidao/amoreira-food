import mysql from 'mysql2'

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE_NAME,
})

db.connect((err) => {
  if (err) {
    console.error('Database connection error')
    return
  }

  console.info('Conection succeeded')
})

export default db
