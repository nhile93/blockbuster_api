import {GET_ALL_TRENDING} from './actionType'

const defaultState = {
  trendingItems: []
}

export default function storeTrending(state = defaultState, action){

  switch(action.type){
    case GET_ALL_TRENDING:
      console.log("get all trending movie items =>", action.trendingItems)
      return {...state, trendingItems: action.trendingItems}

    default: return state
  }
}