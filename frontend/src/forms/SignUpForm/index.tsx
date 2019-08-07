import './signup-form.scss';

import React, { useState } from 'react'
import { connect } from 'react-redux';
import Input from '../../components/Input';
import Button from '../../components/Button';

interface Props {

}

const SignUpForm : React.FC<Props> = () => {
    const [user, setUser] = useState<string>("")
    const [pass, setPass] = useState<string>("")
    const [passConf, setPassConf] = useState<string>("")
    const [validation, setValidation] = useState<string>("")

    const signUp = () => {

    }

    return (
        <div className="signup-form">
            <h1>Sign Up</h1>
            <Input placeholder="Username" value={user} name="user" onChange={e => setUser(e.target.value)} />
            <Input placeholder="Password" value={pass} name="pass" onChange={e => setPass(e.target.value)} />
            <Input placeholder="Confirm Password" value={passConf} name="passConf" onChange={e => setPassConf(e.target.value)} />

            <Button filled onClick={signUp}>Sign Up</Button>
        </div>
    )
}

export default connect(null)(SignUpForm)
