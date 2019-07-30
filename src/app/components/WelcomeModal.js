import React from 'react';

export default class WelcomeModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            display: false,
        };
        this.toggleWelcome = this.toggleWelcome.bind(this);
    }

    toggleWelcome(){
        this.setState({display: !this.state.display});
    }

    componentDidMount(){
        this.toggleWelcome();
    }

    render() {
        let result;
        if (this.state.display) {
            result =  <div>
              <h1 className='welcomeModal'>Добро пожаловать!</h1>
              <p className='hideElement' onClick={this.toggleWelcome}>скрыть приветствие</p>
          </div>
        }

        return ( result || <span> </span> );
    }
}