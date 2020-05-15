import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'
import {getUser} from '../../ducks/userReducer'
import './Landing.css'

const Landing = (props) => {
    console.log(props)

    const [input, setInput] = useState('')

    const handleSearch = (e) => {
        if((+input) > 0) {
            props.history.push(`/display/zip/${input}`)
        }else {
            props.history.push(`/display/city/${input.toLowerCase()}`)
        }
    }


  console.log(input)
  return(
    <div className='landing-body'>
        <div className='landing-container'>
            <div className='landing-quote-container'>
                <h3 className='landing-quote'>We'll help you find a house you'll love</h3>
            </div>
            <div className='search-container'>
                <input placeholder='City or Zip Code' className='search-box' value={input} onChange={(e) => setInput(e.target.value)} />
                <button className='search-button' onClick={handleSearch}>SEARCH</button> 
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

export default connect(mapStateToProps, {getUser})(Landing)