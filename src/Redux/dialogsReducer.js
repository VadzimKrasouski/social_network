const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
    newMessageText: '',
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.messageText;
            return state;
        case SEND_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessageText,
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        default:
            return state;
    }
}

export const updateNewMessageTextCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT, messageText: text
})

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export default dialogsReducer;