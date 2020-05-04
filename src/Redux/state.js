let rerenderEntireTree =()=> {

};

let state = {
    profilePage: {
        posts: [
            {id: 1, post: 'This is my first post.', likesCount: 11},
            {id: 2, post: 'You will know React and Redux perfectly.', likesCount: 10},
            {id: 3, post: 'But It is not for sure.', likesCount: 1},
            {id: 4, post: "So, let's work hard.", likesCount: 4},
            {id: 5, post: "BLA, bla, bLa.", likesCount: 0},
        ],

        newPostText: '',
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
            {id: 5, message: 'Do you remember the task?'},
        ],
    },
};


export const addPost = () => {
    let newPost = {
        id: 6,
        post: state.profilePage.newPostText,
        likesCount: 0,
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export const updatePostText = (postText) => {
    state.profilePage.newPostText = postText;
    rerenderEntireTree(state);
};

export const subscriber = (observer) => {
    rerenderEntireTree = observer;
}

export default state;