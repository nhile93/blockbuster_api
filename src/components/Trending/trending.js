import React, { Component } from 'react';
import axios from 'axios'

class Trending extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieItem: []
    }
  }

  fetchData = () => {
    let url = "https://api.trakt.tv/movies/trending"

    axios.get(url, {headers: {
      'Content-Type': 'application/json',
      'trakt-api-version': '2',
      'trakt-api-key': '23b3672db47632c182337e01d880149387b8c1719adaffe2dfffa1c07860b628'
    }})
    .then(response => {
      this.setState({movieItem: response.data})
    })
  }


  componentDidMount = () => {
    //this.getDataFetch()
    this.fetchData()
  }

  async getDataFetch() {
    // const response = await axios.get(
    //   'https://api.trakt.tv/movies/trending',
    //   { movieItem: 'responseText' },
    //   {  headers: { 
    //     'Content-Type': 'application/json',
    //     'trakt-api-version': '2',
    //     'trakt-api-key': '23b3672db47632c182337e01d880149387b8c1719adaffe2dfffa1c07860b628'
    // } }

    const response =
      await axios.get("https://api.trakt.tv/movies/trending",
        {
          headers: {
            'Content-Type': 'application/json',
            'trakt-api-version': '2',
            'trakt-api-key': '23b3672db47632c182337e01d880149387b8c1719adaffe2dfffa1c07860b628'
          }
        }
      )
    this.setState({ movieItem: response.data })
    console.log(response.data)
  }

  render() {
    return (
      <ul className="trending-list">
        {this.state.movieItem.map((item) =>
          <li>{item.movie.title}</li>
        )}
        <li>test</li>
      </ul>
    );
  }
}

export default Trending;