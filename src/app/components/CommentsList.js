import React, {Component} from 'react'
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
                <h4>Комментарии</h4>
                {comments}
            </div>
        );
    }

    componentDidMount() {

        let urlRequest = 'http://jsonplaceholder.typicode.com/comments';

        if (this.props.postId) {
            urlRequest = 'http://jsonplaceholder.typicode.com/comments?postId=' + this.props.postId
        }
        axios.get(urlRequest).then(response => {
            this.setState({comments: response.data})
        });

    }
}