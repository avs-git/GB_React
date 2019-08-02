import React, {Component} from 'react'
import {Link} from 'react-router';

export default class Comment extends Component {
    render() {
        return (
            <div className="card border-secondary mb-3">
                <div className="card-header">
                    {this.props.name}
                </div>
                <div className="card-body text-secondary">
                    <p>{this.props.body}</p>
                </div>
            </div>
        )
    }
}