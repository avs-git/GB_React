import React, {Component} from 'react'
import axios from 'axios';
import PostPage from '../components/Post';
import CommentsList from '../components/CommentsList';

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null,
        }
    }

    render() {
        return (
            <div>
                {this.state.post && <PostPage  {...this.state.post} />}
                {<CommentsList postId = {this.props.params.postID} />}
            </div>
        )
    }

    componentDidMount() {
        axios.get(` http://jsonplaceholder.typicode.com/posts/${this.props.params.postID}`)
            .then(response => {
                this.setState({post: response.data});
            });
    }
}