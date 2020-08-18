
import axios from 'axios'
import {GET_ALL_TRENDING} from './actionType'

/*======= API =======*/

export function fetchTrending(){
  return function(dispatch){
    let url = "https://api.trakt.tv/movies/trending"

    axios.get(url, {headers: {
      'Content-Type': 'application/json',
      'trakt-api-version': '2',
      'trakt-api-key': '23b3672db47632c182337e01d880149387b8c1719adaffe2dfffa1c07860b628'
    }})
    .then(response => {
      dispatch(fetchTrending_Success(response.data))
      console.log("fetch trending items: ",response.data)
    })
  }
}

/*======= API =======*/

/* Action */

export function fetchTrending_Success(trendingItems){
  return {
    type: GET_ALL_TRENDING,
    trendingItems
  }
}