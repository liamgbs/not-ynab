import './login.scss';
import React from 'react'
import { RootState } from '../../reducers';
import LoginForm from '../../forms/LoginForm';

interface Props extends ReturnType<typeof mapStateToProps> {
    
}

const Login: React.FC<Props> = () => {
    return (
        <div className="login">
            <LoginForm />
        </div>
    )
}

function mapStateToProps(state: RootState) {
    return {
        
    }
}

export default Login