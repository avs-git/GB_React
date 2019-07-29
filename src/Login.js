import React from 'react';

export default class Login extends React.Component {
    render() {
        return (
            <div>
                <label>Login:
                    <input type='text' placeholder='login'/>
                </label>
                <br />
                <label>Password:
                    <input type='password'/>
                </label>
                <br />
                <button>Login</button>
            </div>
        );
    }
}