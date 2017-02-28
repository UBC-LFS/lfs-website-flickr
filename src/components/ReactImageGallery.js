import React from 'react';
import Slider from 'react-image-gallery';

const SimpleSlider = (prop) => {

  const setImages = prop.images.map((img) => {
    return {original: img.originalPictures, thumbnail: img.thumbnailPictures};
  })
  
  const handleImageLoad = (event) => {
    console.log(event.target);
  }

  return (
    <Slider items={setImages} lazyLoad={true} slideInterval={2000} onImageLoad={handleImageLoad}/>
  );
}

export default SimpleSlider;
