import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {getUser} from '../../ducks/userReducer'
import './WishListItem.css'

const WishListItem = (props) => {
    // console.log(props)

    const deleteItem = () => {
        if(props.user.user.email) {
            axios.delete(`/api/delete/item/${props.element.house_id}`)
        .then(() => {
            // window.alert('item removed')
            props.getWishList()
            // console.log(props.element.house_id)
        })
        .catch(err => console.log(err))
        }
    }
    return(
        <div className='favorite-body'>
            <div className='favorite'>
                <img className='favorite-images' alt='head-image' src={props.element.head_image} />
                <div className='price-and-heart'>
                    <h3>${props.element.price}</h3>
                    <h3 className='wish-list-heart' onClick={() => deleteItem(props.element.house_id)}>❤️</h3>
                </div>
                <div className='favorite-infos'>
                    <h4 className='favorite-info'>{props.element.beds} Beds</h4>
                    <h4 className='favorite-info'>{props.element.bath} Baths</h4>
                    <h4 className='favorite-info'>{props.element.sq_ft} Sq.Ft</h4>
                </div>
                <div className='favorite-address-container'>
                    <h4 className='favorite-address'>{props.element.address} {props.element.city} {props.element.state} {props.element.zip_code}</h4>    
                </div>
                
            </div>
        </div>
    )
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps, {getUser})(WishListItem)