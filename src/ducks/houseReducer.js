const initialState= {
    wishList: [],
    house: {},
    housesByCity: [],
    mappedHousesByCity: [],
    housesByZip: [],
    mappedHousesByZip: []
}


const GET_WISH_LIST = 'GET_WISH_LIST'
const GET_HOUSE_DETAIL = 'GET_HOUSE_DETAIL'
const GET_HOUSES_BY_CITY = 'GET_HOUSES_BY_CITY'
const GET_MAPPED_HOUSES = 'GET_MAPPED_HOUSES'
const GET_HOUSES_BY_ZIP = 'GET_HOUSES_BY_ZIP'
const GET_MAPPED_HOUSES_BY_ZIP = 'GET_MAPPED_HOUSES_BY_ZIP'

export function getWishList(housesObj) {
    return {
        type: GET_WISH_LIST,
        payload: housesObj
    }
}

export function getHouseDetail(houseObj) {
    return {
        type: GET_HOUSE_DETAIL,
        payload: houseObj
    }
}

export function getHousesByCity(housesObjByCity) {
    return {
        type: GET_HOUSES_BY_CITY,
        payload: housesObjByCity
    }
}

export function getMappedHouses(mappedHousesByCity) {
    console.log('hit mappedHousesByCity', mappedHousesByCity)
    return {
        type:GET_MAPPED_HOUSES,
        payload: mappedHousesByCity
    }
}

export function getHousesByZip(housesObjByZip) {
    return {
        type: GET_HOUSES_BY_ZIP,
        payload: housesObjByZip
    }
}

export function getMappedHousesByZip(mappedHousesByZip) {
    console.log('hit mappedHousesByZip', mappedHousesByZip)
    return {
        type: GET_MAPPED_HOUSES_BY_ZIP,
        payload: mappedHousesByZip
    }
}

export default function houseReducer(state=initialState, action) {
    const {type, payload} = action
    switch(type) {
        case GET_WISH_LIST:
            // console.log(payload)
            return {...state, wishList:payload}
        case GET_HOUSE_DETAIL:
            return {...state, house: payload[0]}
        case GET_HOUSES_BY_CITY:
            return {...state, housesByCity:payload}
        case GET_MAPPED_HOUSES:
            return {...state, mappedHousesByCity:payload}
        case GET_HOUSES_BY_ZIP:
            return {...state, housesByZip: payload}
        case GET_MAPPED_HOUSES_BY_ZIP:
            return {...state, mappedHousesByZip: payload}
        default:
            return state
    }
}