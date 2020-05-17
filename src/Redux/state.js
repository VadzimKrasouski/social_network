const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let store = {
    _state: {
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
    },

    _callSubscriber() {
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 6,
                post: this._state.profilePage.newPostText,
                likesCount: 0,
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.postText;
            this._callSubscriber(this._state);
        }
    },

    subscriber(observer) {
        this._callSubscriber = observer;
    },
};

export const updatePostActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, postText: text
})

export const addPostActionCreator = () => ({type: ADD_POST})

export default store;