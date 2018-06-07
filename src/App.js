import React, { Component } from 'react';
import './App.css';
import SuggestionFeed from './components/SuggestionFeed/SuggestionFeed';
import FeedControl from './components/FeedControl/FeedControl';
import Constants from './utilities/Constants';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeFeed: Constants.FeedType.SuggestionFeed
    }
  }

  render() {
    return (
      <div className="App">
        <div style={{ width: '70%' }}>
          <FeedControl activefeed={this.state.activeFeed} togglefeed={this.toggleFeed} />
          {
            this.state.activeFeed === Constants.FeedType.EventFeed ?
              'Something' :
              <SuggestionFeed />
          }
        </div>
      </div>
    );
  }

  toggleFeed = (feed) => {
    this.setState({ activeFeed: feed });
  }

}

export default App;
