import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

import './SuggestionFeed.css';
import FeedService from './../../services/FeedService';

class SuggestionFeed extends Component {

  constructor(props) {
    super(props);
    this.state = {
      feed: FeedService.GetSuggestionFeed()
    }
  }

  render() {
    return (
      <div className="SuggestionFeed">
        {
          this.state.feed.map((item, ind) => {
            return (
              <Card key={ind} className="SuggestionFeed-card">
                <CardContent>
                  <Typography color="textSecondary">
                    Suggested Topic
                  </Typography>
                  <Typography color="textSecondary">
                    {item.date.toLocaleDateString()}
                  </Typography>
                  <Typography variant="headline" component="h2">
                    {item.title}
                  </Typography>
                  <Typography color="textSecondary">
                    {item.user.name}
                  </Typography>
                  <Typography component="p" className="SuggestionFeed-card-description">
                    {item.description}
                  </Typography>
                  <div className="SuggestionFeed-card-tags">
                    {
                      item.tags.map((tag, ind) => {
                        return <Chip label={tag} className="SuggestionFeed-card-tag" key={ind} />
                      })
                    }
                  </div>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            )
          })
        }
      </div>
    );
  }

}

export default SuggestionFeed;