
import React, { Component, memo } from 'react';
import { Carousel } from 'element-react'

function MyCarousel(props) {
    return (
      <div className="demo-4 medium">
        <Carousel interval={props.interval} type={props.type} height={props.height}>
          {
            props.imageList.map((item, index) => {
              return (
                <Carousel.Item key={index}>
                 <img src={item} /> 
                </Carousel.Item>
              )
            })
          }
        </Carousel>
      </div>
    );
}

// Set default props
MyCarousel.defaultProps = {
  height: "400px",
  interval: "4000",
  type: "card",
};

export default memo(MyCarousel);