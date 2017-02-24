import React from 'react';
import Slider from 'react-image-gallery';

const SimpleSlider = (prop) => {

  const images = prop.children.map( img => ({original: img.props.src, thumbnail: ''}))
  
  return (
    <Slider items={images} lazyLoad={true} slideInterval={2000}/>
  );
}

export default SimpleSlider;
