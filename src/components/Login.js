import React from 'react'
import LoginForm from './LoginForm'

const Login = (props) => {
    return(
        <div>
            <LoginForm 
                username={props.username}
                password={props.password}
                login={props.login}
                handleFieldChange={props.handleFieldChange}
            />
        </div>
    )
}

export default Login