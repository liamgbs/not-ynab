import './signup-form.scss';

import React, { useState } from 'react'
import { connect } from 'react-redux';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { signUp } from '../../actions/user';

interface Props {
    signUp(username: string, password: string): void
}

const SignUpForm : React.FC<Props> = ({...actions}) => {
    const [user, setUser] = useState<string>("")
    const [pass, setPass] = useState<string>("")
    const [passConf, setPassConf] = useState<string>("")
    const [validation, setValidation] = useState<string>("")

    const signUp = () : void => {
        if (!user || !pass || !passConf) return setValidation("Please fill all fields")
        if (pass !== passConf) return setValidation("Passwords don't match")
        if (pass.length < 8) return setValidation("Password should be 8 characters or more")

        actions.signUp(user, pass);
    }

    return (
        <div className="signup-form">
            <h1>Sign Up</h1>
            <Input type="email" placeholder="Username" value={user} name="user" onChange={e => setUser(e.target.value)} />
            <Input type="password" placeholder="Password" value={pass} name="pass" onChange={e => setPass(e.target.value)} />
            <Input type="password" placeholder="Confirm Password" value={passConf} name="passConf" onChange={e => setPassConf(e.target.value)} />
            <Button filled onClick={signUp}>Sign Up</Button>
            {validation ? <div>{validation}</div> : <div>&nbsp;</div>}
        </div>
    )
}

export default connect(null, {signUp})(SignUpForm)
