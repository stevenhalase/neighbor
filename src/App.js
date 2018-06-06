import React, { Component } from 'react';
import './App.css';
import SuggestionFeed from './components/SuggestionFeed/SuggestionFeed';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <SuggestionFeed />
      </div>
    );
  }
}

export default App;
