import React from 'react';
import Slider from 'react-image-gallery';

const SimpleSlider = (prop) => {
  console.log(prop);
  // const SliderImage = prop.children.map( img => console.log(img.props.src))
  const images = prop.children.map( img => ({original: img.props.src}))

  // const images = [
  //     {
  //       original: 'http://lorempixel.com/1000/600/nature/1/',
  //       thumbnail: 'http://lorempixel.com/250/150/nature/1/',
  //     },
  //     {
  //       original: 'http://lorempixel.com/1000/600/nature/2/',
  //       thumbnail: 'http://lorempixel.com/250/150/nature/2/'
  //     },
  //     {
  //       original: 'http://lorempixel.com/1000/600/nature/3/',
  //       thumbnail: 'http://lorempixel.com/250/150/nature/3/'
  //     }
  //   ]
    
  return (
    <Slider items={images} slideInterval={2000}/>
  )
}

export default SimpleSlider;