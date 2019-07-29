import React from 'react';
import MenuItem from './MenuItem';

export default class Menu extends React.Component {
    render() {
        const items = this.props.items.map((item, index) => {
            return <MenuItem key={index} href={item.href} linkName={item.linkName} />
        });

        return (
            <div>
                <h1>{this.props.menuTitle}</h1>
                <ul>
                    {items}
                </ul>
            </div>
        );
    }
}