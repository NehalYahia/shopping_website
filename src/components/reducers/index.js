import { combineReducers } from 'redux'
import addpro from './addProducts'
import favourite from './addFavourite'
import productView from './productStyle'

export default combineReducers({
    addpro,
    favourite,
    productView
})