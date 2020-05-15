const initialState = {
    // user: {user_id: 22, email: "asd", list_id: 39}
    user: {}
}

const GET_USER = 'GET_USER'

export function getUser(userObj) {
    return {
        type: GET_USER,
        payload: userObj
    }
}

export default function userReducer(state = initialState, action) {
    const {type, payload} = action
    switch(type) {
        case GET_USER:
            return {...state, user: payload}
        default:
            return state
    }
}