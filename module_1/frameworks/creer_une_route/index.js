const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const app = express()

const SECRET = 'ce que vous voulez'
let users = []

app.use(express.json())

const authCheck = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]
    jwt.verify(token, SECRET, (err, user) => {
        req.username = user
        next()
    })
}

app.get('/', authCheck, (req, res) => {
    res.json({'hello': `Bonjour ${req.username?.name ?? 'anonyme'}`})
})

app.post('/register', async (req, res) => {
    const { name, password } = req.body;
    if (!name || !password) { res.json({ 'success': false }) ; return }
    const hashedPassword = await bcrypt.hash(password, 10)
    users.push({name: name, password: hashedPassword})
    console.log(users)
    res.json({ 'success': true })
})

app.post('/login', async (req, res) => {
    const { name, password } = req.body;
    const user = users.find(u => u.name === name)
    if (!user || !await bcrypt.compare(password, user.password)) {
        res.json({ 'success': false })
        return
    }
    const token = jwt.sign({ name }, SECRET, { expiresIn: '1d'})
    res.json({ token: token })
})

app.listen(3002, () => { console.log('app is running') })