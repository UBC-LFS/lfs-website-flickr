import React from 'react';
import Slider from 'react-image-gallery';

const ReactImageGallery = (prop) => {

  const setImages = prop.images.map(img => {
    const thumb = img.slice(0, -6).concat('_t.jpg');
    return {original: img, thumbnail: thumb};
  })

  const handleImageLoad = (event) => {
    console.log(event.target);
  }

  return (
    <Slider
    items={setImages}
    lazyLoad={true}
    slideInterval={2000}
    showFullscreenButton={false}
    userBrowserFullscreen={false}
    showPlayButton={false}
    onImageLoad={handleImageLoad}/>
  );
}

export default ReactImageGallery;
