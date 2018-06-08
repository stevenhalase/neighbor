import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import './Comments.css';

class Comments extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  render() {
    return (
      <div className="Comments">
        <List className={this.state.open ? 'Comments-list Comments-list-open' : 'Comments-list'}>
          {
            this.props.comments.map((comment, ind) => {
              return (
                <ListItem key={ind}>
                  <ListItemAvatar>
                    <Avatar className="Comments-list-avatar">
                      {comment.User.Name.replace(/[^a-zA-Z- ]/g, "").match(/\b\w/g).join('')}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={comment.Text}
                    secondary={new Date(comment.Date).toLocaleString()}
                  />
                </ListItem>
              )
            })
          }
        </List>
      </div>
    );
  }

  toggle = (open) => {
    this.setState({ open: typeof open !== 'undefined' ? open : !this.state.open });
  }
  
}

export default Comments;
