import React from 'react';



class App extends React.Component {
    render () {
        return (
            <div>
                <h1>Emoji Search</h1>
                <form action="">
                    <textarea></textarea>
                    <button type='submit'>Search</button>
                </form>
                <p>emoji</p>
                
                
                {/*<Header />
                <SearchInput
                    textChange={this.handleSearchChange}
                />
                <EmojiResults
                    emojiData=filterEmoji;
                />*/}
            </div>
        );
    }
}

export default App;