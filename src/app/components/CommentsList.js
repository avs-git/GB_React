import React, { Component } from 'react'
import axios from 'axios';
import Comment from './Comment';

export default class CommentsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    }
  }

  render() {
    if (!this.state.comments) {
      return null;
    }

    const comments = this.state.comments.map(comment => {
      return <Comment key={comment.id} {...comment} />
    });

    return (
      <div>
        <h4>Комментарии к посту</h4>
        {comments}
      </div>
    );
  }

  componentDidMount() {
    console.log(this.props.postId);
    axios.get('http://jsonplaceholder.typicode.com/comments?postId='+this.props.postId).then(response => {
      this.setState({ comments: response.data })
    });

    console.log(this.state.comments);
  }
}