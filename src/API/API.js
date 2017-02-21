const API_KEY = '74b6d18bf362b76dff862cf735bb0e1c';

const TEST_API_CALL = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=panda&extras=description&format=json&nojsoncallback=1`;

const fetchImages = () => {
  return fetch(TEST_API_CALL)
      .then( response => response.json())
      .then( json => {
          return json.photos.photo.map(
              ({farm, server, id, secret}) => `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
          );
      });
};

export default fetchImages;