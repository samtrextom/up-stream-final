import authReducer from './authReducer'
import loginSquareReducer from './loginSquareReducer'
import articleReducer from './articleReducer'
import commentReducer from './commentReducer'
import {combineReducers} from 'redux'
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'

const rootReducer=combineReducers({
    auth : authReducer,
    article : articleReducer,
    loginSquare : loginSquareReducer,
    comment : commentReducer,
    firestore : firestoreReducer,
    firebase : firebaseReducer
})

export default rootReducer