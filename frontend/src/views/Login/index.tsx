import './login.scss';
import React, { useState } from 'react'
import { connect } from 'react-redux';
import { RootState } from '../../reducers';
import Input from '../../components/Input';
import { login } from '../../actions/user';
import Button from '../../components/Button';

interface Props extends ReturnType<typeof mapStateToProps> {
    login(user: string, pass: string): void
}

const Login: React.FC<Props> = ({authError, ...actions}) => {
    const [user, setUser] = useState<string>("")
    const [pass, setPass] = useState<string>("")

    const login = () => {
        if (!(user && pass)) return;


    }

    return (
        <div className="login">
            <div className="login-form-wrapper">
                <div className="login-form">
                    <h1>Login</h1>
                    <Input placeholder="user" name="user" onChange={event => setUser(event.target.value)} value={user} />
                    <Input placeholder="pass" name="pass" onChange={event => setPass(event.target.value)} value={pass} />
                    <Button filled onClick={() => actions.login(user, pass)}>Login</Button>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state: RootState) {
    return {
        authError: state.user.authError
    }
}

export default connect(mapStateToProps, {login})(Login)
