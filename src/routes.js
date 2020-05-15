import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Landing from './Components/Landing/Landing'
import DisplayHousesByCity from './Components/DisplayHouses/DisplayHousesByCity'
import DisplayHousesByZip from './Components/DisplayHouses/DisplayHousesByZip'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'
import WishList from './Components/WishList/WishList'
import HouseDetail from './Components/DisplayHouses/HouseDetail'
import Tour from './Components/Tour/Tour'

export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/display/city/:city' component={DisplayHousesByCity} />
        <Route path='/display/zip/:zip_code' component={DisplayHousesByZip} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/wishlist' component={WishList} />
        <Route path='/display/house-detail/:house_id' component={HouseDetail} />
        <Route path='/tour' component={Tour} />
    </Switch>
)