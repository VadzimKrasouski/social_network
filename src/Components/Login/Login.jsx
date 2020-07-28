import React from 'react';
import styles from './Login.module.css'
import {Field, reduxForm} from 'redux-form';


const Login = () => {

    let onLoginClick = (value) => {
        console.log(value)
    }
    return <div className={styles.login}>
        <LoginForm onSubmit={onLoginClick}/>
    </div>
}

export default Login

let LoginForm = (props) => {
    const {handleSubmit} = props
    return <div className={styles.loginForm}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <Field placeholder='Login' name='login' component='input'/>
            <Field placeholder='Password' name='password' component='input'/>
            <Field type='checkbox' name='rememberMe' component='input'/>Remember me
            <button>Login</button>
        </form>
    </div>
}

LoginForm = reduxForm({form: 'login'})(LoginForm)

