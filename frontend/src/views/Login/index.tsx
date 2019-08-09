import './login.scss';
import React from 'react'
import LoginForm from '../../forms/LoginForm';

const Login: React.FC<{}> = () => {
    return (
        <div className="login">
            <LoginForm />
        </div>
    )
}


export default Login