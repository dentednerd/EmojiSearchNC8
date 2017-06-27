import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import emojis from './emojiList.json'

ReactDOM.render (
    <App emojis={emojis} />,
    document.getElementById('root')
);