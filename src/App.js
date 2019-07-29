import React from 'react'
import ReactDOM from 'react-dom';

import Developer from './Lesson2_export';

const temp = new Developer();
console.log(temp.getSomeVar());

class App extends React.Component {
    render () {
        return <div>
            <h1>Первое приложение на React</h1>
        </div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));