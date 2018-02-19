import React from 'react'

const LoginForm = (props) => {
    if (props.user !== null) {
        return null
    }

    return(
        <div>
            <h2>Log in to application</h2>
            <form onSubmit={props.login}>
                <div>
                    Username:
                    <input 
                        type="text"
                        name="username" 
                        value={props.username} 
                        onChange={props.handleLoginFieldChange} 
                     />
                </div>
                <div>
                    Password:
                    <input 
                        type="text"
                        name="password" 
                        value={props.password} 
                        onChange={props.handleLoginFieldChange} 
                    />
                </div>
                <button type="submit">Log in</button>
            </form>
        </div>
    )
}

export default LoginForm