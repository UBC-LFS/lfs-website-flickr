const API_KEY = '74b6d18bf362b76dff862cf735bb0e1c';
const MFRE_IMAGES = `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${API_KEY}&photoset_id=72157677186721265&format=json&nojsoncallback=1`;

const fetchImages = (size) => {
    let sizeString = 'cc'; // default
    switch(size) {
        case (size < 1024):
            sizeString = '_c';
            break;
        case (size < 1600 && size >= 1024):
            sizeString = '_b';
            break;
        default:
            sizeString = '_c';
    }
  return fetch(MFRE_IMAGES)
      .then( response => response.json())
      .then( json => {
          return json.photoset.photo.map(
              ({farm, server, id, secret}) => `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}${sizeString}.jpg`
          );
      }).catch((error) => {
          return error;
      });
};

export default fetchImages;