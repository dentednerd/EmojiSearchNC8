import React from 'react';
import EmojiRow from './EmojiRow';

class EmojiResults extends React.Component {
    render () {
        return (
            <div class='emoji-row'>
                {this.props.emojis.map(function (emoji) {
                    return <EmojiRow symbol={emoji.symbol} title={emoji.title} />
                })}
            </div>
        );
    }
}

export default EmojiResults;