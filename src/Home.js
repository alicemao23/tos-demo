import React, { Component } from 'react'; 
import { Carousel } from 'antd';


class Home extends Component {
    render() {
        return (
         <Carousel effect="fade" autoplay>
            <div><img src="/home-listing1.jpg"/></div>
            <div><img src="/home-listing2.jpg"/></div>
            <div><img src="/home-listing3.jpg"/></div>
          </Carousel>
        )
    }
}

export default Home;