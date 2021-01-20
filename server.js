const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())

const mockUserData = [
    {name: 'Mark'},
    {name: 'Jill'}
]

// all GET request
app.get('/users', (req, res) => {
    res.json({
        success: true,
        message: 'Successfully got users. Nice!',
        users: mockUserData
    })
})

app.get('/users/:id', (req, res) => {
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'got one user',
        user: req.params.id
    })
})

// all POST request
app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    
    const mockUsername = "billyTheKid"
    const mockPassword = "superSecret"

    if(username === mockUsername && password === mockPassword)
        res.json({
            success: true,
            message: 'username and passwors match!',
            token: 'encrypted token goes here'
        })
    else
        res.json({
            sucess: false,
            message: `username or password don't match`
        })
})

app.listen(8000, () => console.log(`Server is running`));