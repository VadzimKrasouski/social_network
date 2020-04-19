import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogs = [
    {id:1, name: 'Andrey'},
    {id:2, name: 'Sasha'},
    {id:3, name: 'Miron'},
    {id:4, name: 'Igor'},
    {id:5, name: 'Ira'},
];

let messages = [
    {id:1, message: 'How are you getting on?'},
    {id:2, message: "Let's go!"},
    {id:3, message: "What's up, man!"},
    {id:4, message: 'Call me.'},
    {id:5, message: 'Do you remember the task?'}
]

let posts = [
    { post : 'This is my first post.', likesCount : '11' },
    { post : 'You will know React and Redux perfectly.', likesCount : '10' },
    { post : 'But It is not for sure.', likesCount : '1' },
    { post : "So, let's work hard.", likesCount : '4' },
    { post : "BLA, bla, bLa.", likesCount : '0' },
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
