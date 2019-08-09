import './signup.scss'
import React from 'react'
import SignUpForm from '../../forms/SignUpForm';

const SignUp: React.FC<{}> = () => {
    return (
        <div className="signup">
            <SignUpForm />
        </div>
    )
}

export default SignUp
