import React from 'react';
import Slider from 'react-image-gallery';

const SimpleSlider = (prop) => {

  const setImages = prop.images.map((img) => ({original: img, thumbnail: ''}))
  
  return (
    <Slider items={setImages} lazyLoad={true} slideInterval={2000}/>
  );
}

export default SimpleSlider;
