import React from 'react';
// import Slider from './SlickSlider';

const Photos = (prop) => {
    // console.log("the prop images are: ", prop);

    const photos = prop.images.map((image, index) => {
        if (image) {
            const source = image;
            return (
                <img key={index} src={source} className="photoImage"/>
            );
        }
    });
    console.log("photos are: ", {photos})
    
    return (    
      <div className="photoList">
        {photos}
      </div>
    );

}

export default Photos;