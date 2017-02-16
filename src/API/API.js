const TEST_API_CALL = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=c552b0c28662d4fe64cd599094a6f88a&tags=panda&format=json&nojsoncallback=1";

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