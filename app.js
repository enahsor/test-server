const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 8080

app.use(cors())

const commentData = {
    1: {
        user: 7,
        timestamp: '1:00',
        comment: 'This is a comment',
        votes: 1,
        replies: [],
    },
    2: {
        user: 6,
        timestamp: '2:00',
        comment: 'Sample comment',
        votes: 0,
        replies: [],
    },
    3: {
        user: 2,
        timestamp: '1:30',
        comment: 'Ouu a comment',
        votes: 2,
        replies: [1],
    },
    4: {
        user: 1,
        timestamp: '3:20',
        comment: 'Yooo is this a comment?',
        votes: 2,
        replies: [5, 6],
    },
    5: {
        user: 5,
        timestamp: '12:30',
        comment: 'Free will is a lie!',
        votes: 6,
        replies: [2, 3],
    },
    6: {
        user: 3,
        timestamp: '6:40',
        comment: 'My head is big!',
        votes: 0,
        replies: [],
    },
    7: {
        user: 4,
        timestamp: '2:00',
        comment: 'Science is the new law',
        votes: 3,
        replies: [],
    },
    8: {
        user: 2,
        timestamp: '5:00',
        comment: 'Bill Clinton! Conspiracy!',
        votes: 10,
        replies: [],
    },
}

const userData = {
    1: {
        name: 'Dowen Robinson',
        photo:
            'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
    },
    2: {
        name: 'Christopher Hitchens',
        photo:
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80',
    },
    3: {
        name: 'Big head',
        photo:
            'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80',
    },
    4: {
        name: 'Samba',
        photo:
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80',
    },
    5: {
        name: 'Zemar',
        photo:
            'https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
    },
    6: {
        name: 'Rohan Rowe',
        photo:
            'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    },
    7: {
        name: 'Kim',
        photo:
            'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
    },
    8: {
        name: 'PeterShortman',
        photo:
            'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
    },
}

app.get(`/`, (req, res, next) => {
    res.send(`Welcome to my test server.`)
})

app.get(`/comment/:id`, (req, res, next) => {
    const id = req.params.id
    console.log(`Fetching comment with id of ${id}`)
    const data = commentData[id]
    if (data) {
        res.send(data)
        next()
    } else {
        console.log(`Comment with id ${id} was not found`)
        res.status(404).send('Comment not found')
    }
})

app.get(`/user/:id`, (req, res, next) => {
    const id = req.params.id
    console.log(`Fetching user with id ${id}`)
    const data = userData[id]
    if (data) {
        res.send(data)
        next()
    } else {
        console.log(`User with id ${id} was not found`)
        res.status(404).send('User not found')
    }
})

app.get(`/comments`, (req, res, next) => {
    console.log(`Getting all comments`)
    res.json(JSON.stringify(commentData))
})

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})
