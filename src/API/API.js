const API_KEY = '74b6d18bf362b76dff862cf735bb0e1c';

const TEST_API_CALL = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=panda&extras=description&format=json&nojsoncallback=1`;
const MFRE_IMAGES = `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${API_KEY}&photoset_id=72157677186721265&format=json&nojsoncallback=1`;
const fakeAPI = '';

const fetchImages = (size) => {
  return fetch(fakeAPI)
      .then( response => response.json())
      .then( json => {
          return json.photoset.photo.map(
              ({farm, server, id, secret}) => `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}${size}.jpg`
          );
      }).catch((error) => {
          return "there's an error!";
      });
};

export default fetchImages;