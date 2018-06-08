import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Badge from '@material-ui/core/Badge';

import './SuggestionFeed.css';
import FeedService from './../../services/FeedService';
import Comments from './../Comments/Comments';

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
            let childCommentsRef = React.createRef();
            let image = `url(${item.Image.Url})`;
            return (
              <Card key={ind} className="SuggestionFeed-card">
                <CardContent>
                  <div className="SuggestionFeed-card-container">
                    <div className="SuggestionFeed-card-content">
                      <Typography color="textSecondary">
                        Suggested Topic
                      </Typography>
                      <Typography color="textSecondary">
                        {new Date(item.Date).toLocaleDateString()}
                      </Typography>
                      <Typography variant="headline" component="h2">
                        {item.Title}
                      </Typography>
                      <Typography color="textSecondary">
                        {item.User.Name}
                      </Typography>
                      <Typography component="p" className="SuggestionFeed-card-description">
                        {item.Description}
                      </Typography>
                    </div>
                    <div className="SuggestionFeed-card-image" style={{ backgroundImage: image }}></div>
                  </div>
                  <div className="SuggestionFeed-card-tags">
                    {
                      item.Tags.map((tag, ind) => {
                        return <Chip label={tag.Text} className="SuggestionFeed-card-tag" key={ind} />
                      })
                    }
                  </div>
                </CardContent>
                <CardActions className="SuggestionFeed-card-actions">
                  <div>
                    <Badge badgeContent={item.Comments.length} color="primary">
                      <Button variant="outlined" size="small" onClick={() => childCommentsRef.current.toggle()}>Comments</Button>
                    </Badge>
                  </div>
                  <div>
                    <Button size="small">Volunteer</Button>
                    <Button size="small">Host</Button>
                  </div>
                </CardActions>
                <Comments comments={item.Comments} ref={childCommentsRef} />
              </Card>
            )
          })
        }
      </div>
    );
  }

}

export default SuggestionFeed;