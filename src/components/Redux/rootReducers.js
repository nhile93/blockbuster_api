import {combineReducers} from 'redux'
import storeTrending from './trendingReducer'

const movieReducer = combineReducers({storeTrending})

export default movieReducer