import React from 'react'
import ReactDOM from 'react-dom';

import Login from './Login';
import Menu from './Menu';
import Blog from './app/components/Blog';
import WelcomeModal from './app/components/WelcomeModal';


class App extends React.Component {


    render() {
        const items = [
            {href: '/', linkName: 'Главная'},
            {href: 'catalog', linkName: 'Каталог'},
            {href: 'about', linkName: 'О нас'},
            {href: 'contacts', linkName: 'Контакты'},
        ];

        const blogItems = [
            {
                header: 'Пост без контента',
                author: 'admin',
            },
            {
                header: 'Пост без автора',
                postContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad commodi, cum doloremque et eveniet ex hic, in laudantium magni maxime minima mollitia non, nostrum provident ullam unde voluptate voluptatum.',
            },
            {
                author: 'SomeAnotherUser',
                postContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad commodi, cum doloremque et eveniet ex hic, in laudantium magni maxime minima mollitia non, nostrum provident ullam unde voluptate voluptatum.',
            },
            {
                header: 'Пост с полным наполнением',
                author: 'Я, лично',
                postContent: 'Роскошной модификации Patrol – Infiniti QX80 – подправили дизайн пару лет назад, но исходного внедорожника Nissan рестайлинг тогда не коснулся. Вот и получается, что последнее существенное преображение флагман материнской компании пережил аж в 2014 году. И лишь сейчас японцы готовятся вывести на рынок Patrol с новым внешним обликом, такой автомобиль поймали в Дубае: фотографию передней части опубликовал сайт Arab GT, а видео, на котором можно рассмотреть корму, выложил в своем Instagram пользователь с ником almuraba.',
            },

        ];

        return <div>
            <WelcomeModal />
            <Login/>
            <Menu items={items} menuTitle='Главное меню'/>
            <Blog blogItems={blogItems} />
        </div>
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));