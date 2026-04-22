const express = require('express')
const cors = require('cors')
const sqlite3 = require('sqlite3').verbose()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const app = express()
app.use(cors())
app.use(express.json())

const db = new sqlite3.Database('./amevia.db')
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT, email TEXT, project TEXT, budget TEXT, message TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`)
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE, password TEXT, name TEXT
  )`)
})

app.post('/api/contact', (req, res) => {
  const { name, email, project, budget, message } = req.body
  db.run(
    'INSERT INTO contacts (name, email, project, budget, message) VALUES (?,?,?,?,?)',
    [name, email, project, budget, message],
    function(err) {
      if (err) return res.status(500).json({ error: err.message })
      res.json({ id: this.lastID, success: true })
    }
  )
})

app.get('/api/contacts', (req, res) => {
  db.all('SELECT * FROM contacts ORDER BY created_at DESC', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message })
    res.json(rows)
  })
})

app.post('/api/auth/register', async (req, res) => {
  const { email, password, name } = req.body
  const hash = await bcrypt.hash(password, 10)
  db.run('INSERT INTO users (email, password, name) VALUES (?,?,?)', [email, hash, name], function(err) {
    if (err) return res.status(400).json({ error: err.message })
    const token = jwt.sign({ id: this.lastID, email }, 'amevia-secret-2026')
    res.json({ token, user: { id: this.lastID, email, name } })
  })
})

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body
  db.get('SELECT * FROM users WHERE email = ?', [email], async (err, user) => {
    if (err || !user) return res.status(400).json({ error: 'Invalid credentials' })
    const match = await bcrypt.compare(password, user.password)
    if (!match) return res.status(400).json({ error: 'Invalid credentials' })
    const token = jwt.sign({ id: user.id, email }, 'amevia-secret-2026')
    res.json({ token, user: { id: user.id, email: user.email, name: user.name } })
  })
})

app.get('/api/health', (_req, res) => res.json({ status: 'ok', time: new Date().toISOString() }))

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`AMEVIA API running on port ${PORT}`))
