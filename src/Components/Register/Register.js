import React, { useState } from 'react'
import axios from 'axios'
import {getUser} from '../../ducks/userReducer'
import {connect} from 'react-redux'
import './Register.css'

const Register = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleRegister = async () => {
        await axios.post('/auth/register', {email, password})
        .then(res => {
            props.getUser(res.data)
            console.log(res.data)
            props.history.push('/')
        })
    }

    console.log(props)
    console.log(email)
    console.log(password)
    return(
        <div className='register-body'>
            <div className='register-form-container'>
                <h3 className='account-register'>ACCOUNT REGISTER</h3>
                <div>
                    <p className='register-text'>USER NAME</p>
                    <input className='register-input' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <p className='register-text'>PASSWORD</p>
                    <input type='password' className='register-input' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='register-button-container'>
                    <button className='register-button' onClick={handleRegister}>REGISTER</button>
                </div> 
            </div>
        </div>
    )
}
const mapStateToProps = reduxState => {
    const {user} = reduxState
    return {
        store: {
            user
        }
    }
}

export default connect(mapStateToProps, {getUser})(Register)