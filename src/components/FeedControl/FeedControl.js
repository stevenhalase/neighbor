import React, { Component } from 'react';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import './FeedControl.css';
import Constants from './../../utilities/Constants';

class FeedControl extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="FeedControl">
        <RadioGroup
            aria-label="Feed"
            name="feedType"
            value={this.props.activefeed.toString()}
            onChange={(ev) => this.props.togglefeed(parseInt(ev.target.value))}
            className="FeedControl-radio-group"
          >
            <FormControlLabel value={Constants.FeedType.EventFeed.toString()} control={<Radio color="primary" />} label="Events" />
            <FormControlLabel value={Constants.FeedType.SuggestionFeed.toString()} control={<Radio color="primary" />} label="Suggestions" />
          </RadioGroup>
      </div>
    );
  }
  
}

export default FeedControl;