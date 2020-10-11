# Test Server

## What is this?

As the name states, this is a test server that responds with test data.

## Who is this for?

This was created for my use but you're free to make use of it. I doubt it will be helpful

## Data to expect

```js
const comments = {
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
```

## How do I get the data?

It's easy. Make a call to `whateverheroku.com/{comment/user}/{commentid/userid}`
