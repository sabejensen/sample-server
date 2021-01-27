const express = require('express')

const app = express()

const person = {
    dataType: 'Example Person',
    name: 'Jeffrey',
    hairColor: 'Brown',
    eyeColor: 'Brown',
    favoriteThings: [
        'Mountain Biking',
        'Cooking',
        'Waterslides'
    ]
}

app.use(express.static('public'))

app.use('/api', (req, res, next) => {
    res.send(res.json(person))
})
app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>')
})

app.listen(5000)

