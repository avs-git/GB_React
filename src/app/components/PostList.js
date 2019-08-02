import React, { Component } from 'react'
import axios from 'axios';
import Post from './Post';

export default class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  render() {
    if (!this.state.posts) {
      return null;
    }

    const posts = this.state.posts.map(post => {
      return <Post key={post.id} {...post} />
    })

    return (
      <div>
        <h4>Посты</h4>
        {posts}
      </div>
    )
  }

  componentDidMount() {
    let urlRequest = this.props.userID ? 'http://jsonplaceholder.typicode.com/posts?userId=' +
        this.props.userID : 'http://jsonplaceholder.typicode.com/posts';

    axios.get(urlRequest).then(response => {
      this.setState({ posts: response.data })
    })
  }
}