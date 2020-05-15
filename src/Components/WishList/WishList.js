import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {getUser} from '../../ducks/userReducer'
import WishListItem from '../WishListItem/WishListItem'
import './WishList.css'

const WishList = (props) => {
    const [faveList, setFavList] = useState([])
    // console.log(props)

    useEffect(() => {
        getWishList()
    }, [])

    const getWishList = () => {
        axios.get(`/api/get/list/${props.user.user.list_id}`)
        .then(res => {
            setFavList(res.data)
            // console.log(res.data)
        })
        .catch(err => console.log(err))
    }

    const mapFavList = faveList.map((element) => (
        <WishListItem getWishList={getWishList} element={element} key={element.house_id} />
    ))

    return(
        <div className='favorite-body'>
            <div className="mapped-favorite-houses">
               {mapFavList} 
            </div>
            
        </div>
    )
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps, {getUser})(WishList)