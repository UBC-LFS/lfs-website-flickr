import React from 'react';
import Slider from 'react-image-gallery';

const SimpleSlider = (prop) => {

  const setImages = prop.images.map((img) => ({original: img, thumbnail: ''}))
  
  const handleImageLoad = (event) => {
    console.log(event.target)
    //event.target = '<img src="https://farm6.staticflickr.com/5637/30933714450_7b6b3e470b_n.jpg">'
  }



  return (
    <Slider items={setImages} lazyLoad={true} slideInterval={2000} onImageLoad={handleImageLoad}/>
  );
}

export default SimpleSlider;
