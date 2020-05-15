import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import './House.css'


const House = (props) => {
    console.log(props)
    const [heart, setHeart] = useState(false)

    useEffect(() => {
        // console.log(props)
        if(props.wishList.map(house => house.house_id).indexOf(props.houseInfo.house_id) !== -1) {
            setHeart(!heart)
        }
    }, [])

    const toggleFn = () => {
        if(!heart) {
            addToList()
        }   else {
            deleteItem(props.houseInfo.house_id)
        }
        setHeart(!heart)
    }
    
    const moveToHouseDetail = () => {
        const {houseInfo} = props
        props.props.history.push(`/display/house-detail/${houseInfo.house_id}`)
    }

    const addToList = () => {
        const {house_id} = props.houseInfo
        if(props.user.email) {
            axios.post('api/add/list', {list_id: props.user.list_id, house_id})
            .then(() => {
                console.log(house_id)
                // window.alert('item added')
            })
            .catch(err => console.log(err))
        }
    }

    const deleteItem = (id) => {
        if(props.user.email) {
            axios.delete(`/api/delete/item/${id}`)
        .then(() => {
            // window.alert('item removed')
            console.log(id)
        })
        .catch(err => console.log(err))
        }
    }

    return(
        
        <div className='house-body'>
            <div className='house'>
                <img className='house-images' alt='head-image' src={props.houseInfo.head_image} onClick={moveToHouseDetail} />
                <div className='price-and-heart'>
                    <h3>${props.houseInfo.price}</h3>
                    {!heart
                    ?
                    (
                        <h3 className='house-heart' onClick={toggleFn}>♡</h3>
                    )
                    :
                    (
                        <h3 className='house-heart' onClick={toggleFn}>❤️</h3>
                    )}
                </div>
                <div className='house-infos'>
                    <h4 className='house-info'>{props.houseInfo.beds} Beds</h4>
                    <h4 className='house-info'>{props.houseInfo.bath} Baths</h4>
                    <h4 className='house-info'>{props.houseInfo.sq_ft} Sq.Ft</h4>
                </div>
                <div className='house-address-container'>
                    <h4 className='house-address'>{props.houseInfo.address} {props.houseInfo.city} {props.houseInfo.state} {props.houseInfo.zip_code}</h4>    
                </div>
                
            </div>
        </div>

    )
}
// const mapStateToProps = reduxState => reduxState

const mapStateToProps = reduxState => {
    const {wishList} = reduxState.house
    const {user} = reduxState.user
    return {user, wishList}
}

export default connect(mapStateToProps)(House)