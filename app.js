const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 8080

app.use(cors())

const videos = [1, 2, 3]

const users = {
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

const comments = {
    1: [
        {
            id: 1,
            user: users[1],
            time: 2,
            votes: 3,
            comment: 'useEffect to handle side-effects',
            replies: 1,
        },
        {
            id: 2,
            user: users[2],
            time: 1,
            votes: 0,
            comment: 'I made a comment and its showing',
            replies: 0,
        },
        {
            id: 3,
            user: users[3],
            time: 5,
            votes: 10,
            comment: 'Be bold as bold needs being.',
            replies: 1,
        },
    ],
    2: [
        {
            id: 4,
            user: users[4],
            time: 2,
            votes: 7,
            comment: 'What kinda comment system is this? Its awesome!',
            replies: 0,
        },
        {
            id: 5,
            user: users[5],
            time: 4,
            votes: 4,
            comment: 'Today I saw the most beautiful lady - shes my girlfriend',
            replies: 1,
        },
    ],
    3: [],
}

const replies = {
    1: [
        {
            id: 101,
            user: users[6],
            time: 20,
            votes: 100,
            comment: 'I am replying to this comment.',
        },
    ],
    3: [
        {
            id: 102,
            user: users[7],
            time: 10,
            votes: 100,
            comment: 'I am replying to this comment with STYLE!!!',
        },
    ],
    5: [
        {
            id: 103,
            user: users[8],
            time: 30,
            votes: 9,
            comment: 'I am replying differently!',
        },
    ],
}

app.get(`/`, (req, res, next) => {
    res.send(`Welcome to my test server.`)
})

app.get(`/videos`, (req, res, next) => {
    res.send(videos)
})

app.get(`/video/:id`, (req, res, next) => {
    const keys = Object.keys(comments)
    const id = req.params.id

    if (keys.includes(id)) {
        const data = comments[id]
        res.send(data)
    }

    res.status(404).send('Not found')
})

app.get(`/replies/:id`, (req, res, next) => {
    const id = req.params.id
    const data = replies[id]
    res.send(data)
})

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})
