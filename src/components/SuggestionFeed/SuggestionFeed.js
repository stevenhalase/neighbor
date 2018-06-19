import React, { Component } from 'react';

import './SuggestionFeed.css';
import FeedService from './../../services/FeedService';
import SuggestionFeedItem from './../SuggestionFeedItem/SuggestionFeedItem';

class SuggestionFeed extends Component {

  constructor(props) {
    super(props);
    this.state = {
      feed: []
    }
  }

  componentWillMount() {
    FeedService.GetSuggestionFeed()
      .then(feed => {
        this.setState({ feed });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render = () => {
    return (
      <div className="SuggestionFeed">
        {
          this.state.feed.map((item, ind) => {
            return <SuggestionFeedItem item={item} key={ind} />
          })
        }
      </div>
    );
  }

}

export default SuggestionFeed;