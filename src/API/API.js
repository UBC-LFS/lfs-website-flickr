import 'whatwg-fetch';

const API_KEY = '74b6d18bf362b76dff862cf735bb0e1c';
const PHOTOSET_ID = '72157676306915403';

const MFRE_IMAGES = `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${API_KEY}&photoset_id=${PHOTOSET_ID}&format=json&nojsoncallback=1`;

const fetchImages = (size) => {
	let sizeString = '_b'; //default

	(size >= 1800) ? sizeString = '_h' : (size >= 1000) ? sizeString = '_b' : sizeString = '_z'

	return fetch(MFRE_IMAGES)
		.then(response => response.json())
		.then(json => {
			return json.photoset.photo.map(
				({ farm, server, id, secret}) => `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}${sizeString}.jpg`
			);
		}).catch((error) => {
			return error;
		});
};

export default fetchImages;
