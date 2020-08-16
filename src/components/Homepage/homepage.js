import React, { Component } from 'react';
import Trending from '../Trending/trending'

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieItem: []
    }
  }

  // componentDidMount = () =>{

  //   let request = new XMLHttpRequest();

  //   request.open('GET', 'https://api.trakt.tv/movies/trending');

  //   request.setRequestHeader('Content-Type', 'application/json');
  //   request.setRequestHeader('trakt-api-version', '2');
  //   request.setRequestHeader('trakt-api-key', '23b3672db47632c182337e01d880149387b8c1719adaffe2dfffa1c07860b628');

  //   request.onreadystatechange = function () {
  //     if (this.readyState === 4) {
  //       console.log('Status:', this.status);
  //       console.log('Body:', this.responseText);
        
  //     }
  //     this.setState({movieItem: this.responseText})
  //     console.log("list item: "+this.state.movieItem)
  //   };

  // }

  render() {
    return (
      <div className="homepage">
        <div className="slider movie-items">
          <div className="container">
            <div className="row">
              <div className="social-link">
                <p>Follow us: </p>
                <a href="#"><i className="ion-social-facebook"></i></a>
                <a href="#"><i className="ion-social-twitter"></i></a>
                <a href="#"><i className="ion-social-googleplus"></i></a>
                <a href="#"><i className="ion-social-youtube"></i></a>
              </div>
              <div className="slick-multiItemSlider">
                <div className="movie-item">
                  <div className="mv-img">
                    <a href="#"><img src="images/uploads/slider1.jpg" alt="" width="285" height="437" /></a>
                  </div>
                  <div className="title-in">
                    <div className="cate">
                      <span className="blue"><a href="#">Sci-fi</a></span>
                    </div>
                    <h6><a href="#">Interstellar</a></h6>
                    <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                  </div>
                </div>
                <div className="movie-item">
                  <div className="mv-img">
                    <a href="#"><img src="images/uploads/slider2.jpg" alt="" width="285" height="437" /></a>
                  </div>
                  <div className="title-in">
                    <div className="cate">
                      <span className="yell"><a href="#">action</a></span>
                    </div>
                    <h6><a href="#">The revenant</a></h6>
                    <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                  </div>
                </div>
                <div className="movie-item">
                  <div className="mv-img">
                    <a href="#"><img src="images/uploads/slider3.jpg" alt="" width="285" height="437" /></a>
                  </div>
                  <div className="title-in">
                    <div className="cate">
                      <span className="green"><a href="#">comedy</a></span>
                    </div>
                    <h6><a href="#">Die hard</a></h6>
                    <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                  </div>
                </div>
                <div className="movie-item">
                  <div className="mv-img">
                    <a href="#"><img src="images/uploads/slider4.jpg" alt="" width="285" height="437" /></a>
                  </div>
                  <div className="title-in">
                    <div className="cate">
                      <span className="blue"><a href="#">Sci-fi</a></span> <span className="orange"><a href="#">advanture</a></span>
                    </div>
                    <h6><a href="#">The walk</a></h6>
                    <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                  </div>
                </div>
                <div className="movie-item">
                  <div className="mv-img">
                    <a href="#"><img src="images/uploads/slider1.jpg" alt="" width="285" height="437" /></a>
                  </div>
                  <div className="title-in">
                    <div className="cate">
                      <span className="blue"><a href="#">Sci-fi</a></span>
                    </div>
                    <h6><a href="#">Interstellar</a></h6>
                    <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                  </div>
                </div>
                <div className="movie-item">
                  <div className="mv-img">
                    <a href="#"><img src="images/uploads/slider2.jpg" alt="" width="285" height="437" /></a>
                  </div>
                  <div className="title-in">
                    <div className="cate">
                      <span className="yell"><a href="#">action</a></span>
                    </div>
                    <h6><a href="#">The revenant</a></h6>
                    <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                  </div>
                </div>
                <div className="movie-item">
                  <div className="mv-img">
                    <img src="images/uploads/slider3.jpg" alt="" width="285" height="437" />
                  </div>
                  <div className="title-in">
                    <div className="cate">
                      <span className="green"><a href="#">comedy</a></span>
                    </div>
                    <h6><a href="#">Die hard</a></h6>
                    <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                  </div>
                </div>
                <div className="movie-item">
                  <div className="mv-img">
                    <img src="images/uploads/slider4.jpg" alt="" width="285" height="437" />
                  </div>
                  <div className="title-in">
                    <div className="cate">
                      <span className="blue"><a href="#">Sci-fi</a></span> <span className="orange"><a href="#">advanture</a></span>
                    </div>
                    <h6><a href="#">The walk</a></h6>
                    <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                  </div>
                </div>
                <div className="movie-item">
                  <div className="mv-img">
                    <img src="images/uploads/slider3.jpg" alt="" width="285" height="437" />
                  </div>
                  <div className="title-in">
                    <div className="cate">
                      <span className="green"><a href="#">comedy</a></span>
                    </div>
                    <h6><a href="#">Die hard</a></h6>
                    <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Trending/>

        <div className="latestnew">
          <div className="container">
            <div className="row ipad-width">
              <div className="col-md-8">
                <div className="ads">
                  <img src="images/uploads/ads2.png" alt="" width="728" height="106" />
                </div>
                <div className="title-hd">
                  <h2>Latest news</h2>
                </div>
                <div className="tabs">
                  <ul className="tab-links-3">
                    <li className="active"><a href="#tab31">#Movies </a></li>
                    <li><a href="#tab32"> #TV Shows </a></li>
                    <li><a href="#tab33">  # Celebs</a></li>
                  </ul>
                  <div className="tab-content">
                    <div id="tab31" className="tab active">
                      <div className="row">
                        <div className="blog-item-style-1">
                          <img src="images/uploads/blog-it1.jpg" alt="" width="170" height="250" />
                          <div className="blog-it-infor">
                            <h3><a href="#">Brie Larson to play first female white house candidate Victoria Woodull in Amazon film</a></h3>
                            <span className="time">13 hours ago</span>
                            <p>Exclusive: <span>Amazon Studios </span>has acquired Victoria Woodhull, with Oscar winning Room star <span>Brie Larson</span> polsed to produce, and play the first female candidate for the presidency of the United States. Amazon bought it in a pitch package deal. <span> Ben Kopit</span>, who wrote the Warner Bros film <span>Libertine</span> that has...</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="tab32" className="tab">
                      <div className="row">
                        <div className="blog-item-style-1">
                          <img src="images/uploads/blog-it2.jpg" alt="" width="170" height="250" />
                          <div className="blog-it-infor">
                            <h3><a href="#">Tab 2</a></h3>
                            <span className="time">13 hours ago</span>
                            <p>Exclusive: <span>Amazon Studios </span>has acquired Victoria Woodhull, with Oscar winning Room star <span>Brie Larson</span> polsed to produce, and play the first female candidate for the presidency of the United States. Amazon bought it in a pitch package deal. <span> Ben Kopit</span>, who wrote the Warner Bros film <span>Libertine</span> that has...</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="tab33" className="tab">
                      <div className="row">
                        <div className="blog-item-style-1">
                          <img src="images/uploads/blog-it1.jpg" alt="" width="170" height="250" />
                          <div className="blog-it-infor">
                            <h3><a href="#">Tab 3</a></h3>
                            <span className="time">13 hours ago</span>
                            <p>Exclusive: <span>Amazon Studios </span>has acquired Victoria Woodhull, with Oscar winning Room star <span>Brie Larson</span> polsed to produce, and play the first female candidate for the presidency of the United States. Amazon bought it in a pitch package deal. <span> Ben Kopit</span>, who wrote the Warner Bros film <span>Libertine</span> that has...</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="morenew">
                  <div className="title-hd">
                    <h3>More news on Blockbuster</h3>
                    <a href="#" className="viewall">See all Movies news<i className="ion-ios-arrow-right"></i></a>
                  </div>
                  <div className="more-items">
                    <div className="left">
                      <div className="more-it">
                        <h6><a href="#">Michael Shannon Frontrunner to play Cable in “Deadpool 2”</a></h6>
                        <span className="time">13 hours ago</span>
                      </div>
                      <div className="more-it">
                        <h6><a href="#">French cannibal horror “Raw” inspires L.A. theater to hand out “Barf Bags”</a></h6>

                        <span className="time">13 hours ago</span>
                      </div>
                    </div>
                    <div className="right">
                      <div className="more-it">
                        <h6><a href="#">Laura Dern in talks to join Justin Kelly’s biopic “JT Leroy”</a></h6>
                        <span className="time">13 hours ago</span>
                      </div>
                      <div className="more-it">
                        <h6><a href="#">China punishes more than 300 cinemas for box office cheating</a></h6>
                        <span className="time">13 hours ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="sidebar">
                  <div className="sb-facebook sb-it">
                    <h4 className="sb-title">Find us on Facebook</h4>
                    
                  </div>
                  <div className="sb-twitter sb-it">
                    <h4 className="sb-title">Tweet to us</h4>
                    <div className="slick-tw">
                      <div className="tweet item" id="">
                      </div>
                      <div className="tweet item" id="">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;