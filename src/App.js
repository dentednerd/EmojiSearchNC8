import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import EmojiResults from './EmojiResults';
import filterEmoji from './filterEmoji';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ""
        };
        this.updateSearchTerm = this.updateSearchTerm.bind(this);
    }

        render () {
        return (
            <div>
                <Header />
                <SearchBar
                    searchTerm={this.state.searchTerm} 
                    updateSearchTerm={this.updateSearchTerm} 
                />
                <EmojiResults 
                    emojis={filterEmoji(this.state.searchTerm)}/>
                
                
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
    updateSearchTerm (newTerm) {
        this.setState({
            searchTerm: newTerm
        })
    }
}

export default App;