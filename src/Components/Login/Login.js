import React, { useState } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {getUser} from '../../ducks/userReducer'
import './Login.css'

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async () => {
        await axios.post('/auth/login', {email, password})
        .then(res => {
            props.getUser(res.data)
            console.log(res.data)
            props.history.push('/')
        })
    }

    return(
        <div className='login-body'>
            <div className='login-form-container'>
                <h3 className='account-login'>ACCOUNT LOGIN</h3>
                <div>
                    <p className='login-text'>USER NAME</p>
                    <input className='login-input' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <p className='login-text'>PASSWORD</p>
                    <input type='password' className='login-input' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='login-button-container'>
                    <button className='login-button' onClick={handleLogin}>LOGIN</button> 
                </div>
                   
            </div>
            
        </div>
    )
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps, {getUser})(Login)