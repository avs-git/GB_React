import React from 'react'
import ReactDOM from 'react-dom';

import Login from './Login';
import Menu from './Menu';


class App extends React.Component {


    render() {
        const items = [
            {href: '/', linkName: 'Главная'},
            {href: 'catalog', linkName: 'Каталог'},
            {href: 'about', linkName: 'О нас'},
            {href: 'contacts', linkName: 'Контакты'},
        ];

        return <div>
            <Login/>
            <Menu items={items} menuTitle='Главное меню'/>
        </div>
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));