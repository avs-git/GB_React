import React from 'react';

export default class Post extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.header}</h3>
                <span>{this.props.author}</span>
                <p>{this.props.postContent}</p>
            </div>
        )
    }
}

Post.defaultProps = {
    header: 'Заголовок поста',
    author: 'Unknown user',
    postContent: 'Пустой пост',
};