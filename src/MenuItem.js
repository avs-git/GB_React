import React from 'react';

export default class MenuItem extends React.Component {
    render() {
        return (
            <li><a href={this.props.href}>{this.props.linkName}</a></li>
        )
    }
}

MenuItem.defaultProps = {
    href: '/',
    linkName: 'Главная',
};