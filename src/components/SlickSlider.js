import React from 'react';
import Slider from 'react-image-gallery';

const SimpleSlider = (prop) => {
  //console.log(prop);
  // const SliderImage = prop.children.map( img => console.log(img.props.src))
  const images = prop.children.map( img => ({original: img.props.src, thumbnail: img.props.src}))
  
  return (
    <Slider items={images} slideInterval={2000}/>
  )
}

export default SimpleSlider;
