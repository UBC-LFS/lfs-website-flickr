# LFS Website Flickr Gallery
An image slider that pulls images from any public facing Flickr gallery. Built using ReactJS. Supports mobile devices, lazy loading, and intelligently requests image size depending on the screen resolution of device. 

### To create a new gallery

* You'll need to have [git](https://git-scm.com/) and [node](https://nodejs.org/en/) installed in your system.
* Clone the project from Command Line:

```
git clone https://github.com/justin0022/lfs-website-flickr.git
```

* CD into folder:

```
cd lfs-website-flickr
```

* Install the dependencies:

```
npm install
```

* Create a public Flickr gallery:
![Flickr Screenshot](/README_assets/flickr-screenshot.png? "Flickr Gallery")

* Copy and paste the numbers at the end of the URL. In this case, the URL is:
```
https://www.flickr.com/photos/lfslearningcentre/albums/72157677186721265
````
So copy 
```
72157677186721265
```

* Open the API.js file in SRC/API
![API Screenshot](/README_assets/api-screenshot.png? "API.js")

* Modify line 4 so that YOUR-GALLERY-NUMBER is set to PHOTOSET_ID and save file
```
const PHOTOSET_ID = 'YOUR-GALLERY-NUMBER';
```

* Then run the build.
```
npm run build
```

* Once the build completes, the files will be in /public.
To deploy to WordPress, copy the JS and CSS files into the Custom JavaScript and Custom CSS fields, and in the editor add:
```
<div id="app" style="margin-bottom:100px"></div>
```
React will attach itself to the div with id="app"

* Once completed, it should look like this: 
![API Screenshot](/README_assets/gallery-screenshot.png? "API.js")

