import {FETCH_FRIENDS_START, FETCH_FRIENDS_SUCCESS, FETCH_FRIENDS_FAILURE, LOGIN_SUCCESS, LOGIN_FETCHING, LOGIN_FAILURE} from '../actions';

const initialState = {
    fetchingFriends: false,

    friends: [],
    loggingIn: false,
    isFetching: false,
    error: null
}

export const friendReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FRIENDS_START:
        return {
            ...state,
            err: '',
            fetchingFriends: true
        }
        case FETCH_FRIENDS_SUCCESS:
        return {
            ...state,
            err: '',
            isFetching: false,
            friend: action.payload
        }
        case LOGIN_FETCHING:
        return {
            ...state,
            loggingIn: false,
            isFetching: true,
        }
        case LOGIN_SUCCESS:
        return {
            ...state,
            loggingIn: true,
            isFetching: false,
        }
        case LOGIN_FAILURE:
        return {
            ...state,
            loggingIn: false,
            isFetching: false,
            err: 'holy crap what happened?'
        }
        case FETCH_FRIENDS_FAILURE:
        default:
        return state

    }
}

// export default Reducer
