import React from 'react';
import Post from './Post';

export default class Blog extends React.Component {
    render() {
        const items = this.props.blogItems.map((item, index) => {
            return <Post key={index} header={item.header} postContent={item.postContent} author={item.author}/>
        });

        return (
            <div>
                {items}
            </div>
        );
    }
}