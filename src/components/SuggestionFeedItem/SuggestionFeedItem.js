import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Badge from '@material-ui/core/Badge';

import './SuggestionFeedItem.css';
import Comments from './../Comments/Comments';

class SuggestionFeedItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let childCommentsRef = React.createRef();
    let image = `url(${this.props.item.Image.Url})`;
    return (
      <div className="SuggestionFeedItemItem">
        <Card className="SuggestionFeedItem-card">
          <CardContent>
            <div className="SuggestionFeedItem-card-container">
              <div className="SuggestionFeedItem-card-content">
                <Typography color="textSecondary">
                  Suggested Topic
                </Typography>
                <Typography color="textSecondary">
                  {new Date(this.props.item.Date).toLocaleDateString()}
                </Typography>
                <Typography variant="headline" component="h2">
                  {this.props.item.Title}
                </Typography>
                <Typography color="textSecondary">
                  {this.props.item.User.Name}
                </Typography>
                <Typography component="p" className="SuggestionFeedItem-card-description">
                  {this.props.item.Description}
                </Typography>
              </div>
              <div className="SuggestionFeedItem-card-image" style={{ backgroundImage: image }}></div>
            </div>
            <div className="SuggestionFeedItem-card-tags">
              {
                this.props.item.Tags.map((tag, ind) => {
                  return <Chip label={tag.Text} className="SuggestionFeedItem-card-tag" key={ind} />
                })
              }
            </div>
          </CardContent>
          <CardActions className="SuggestionFeedItem-card-actions">
            <div>
              <Badge badgeContent={this.props.item.Comments.length} color="primary">
                <Button variant="outlined" size="small" onClick={() => childCommentsRef.current.toggle()}>Comments</Button>
              </Badge>
            </div>
            <div>
              <Button size="small">Volunteer</Button>
              <Button size="small">Host</Button>
            </div>
          </CardActions>
          <Comments comments={this.props.item.Comments} ref={childCommentsRef} />
        </Card>
      </div>
    );
  }
  
}

export default SuggestionFeedItem;