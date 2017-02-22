import React from 'react';
import SimpleSlider from './SlickSlider';

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
    //console.log("photos are: ", {photos})


    return (
    
        <SimpleSlider>{photos}</SimpleSlider>

    );

}

export default Photos;