let state = {
    profilePage: {
        posts: [
            {post: 'This is my first post.', likesCount: '11'},
            {post: 'You will know React and Redux perfectly.', likesCount: '10'},
            {post: 'But It is not for sure.', likesCount: '1'},
            {post: "So, let's work hard.", likesCount: '4'},
            {post: "BLA, bla, bLa.", likesCount: '0'},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Andrey'},
            {id: 2, name: 'Sasha'},
            {id: 3, name: 'Miron'},
            {id: 4, name: 'Igor'},
            {id: 5, name: 'Ira'},
        ],

        messages: [
            {id: 1, message: 'How are you getting on?'},
            {id: 2, message: "Let's go!"},
            {id: 3, message: "What's up, man!"},
            {id: 4, message: 'Call me.'},
            {id: 5, message: 'Do you remember the task?'}
        ],
    },
};

export default state;