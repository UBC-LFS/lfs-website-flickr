# LFS Website Flickr Gallery
An image slider that pulls images from any public facing Flickr gallery. Built using ReactJS.

### To create a new gallery

* You'll need to have [node](https://nodejs.org/en/) installed in your system.
* Clone the project:

```
git clone https://github.com/alicoding/react-webpack-babel.git
```

* Then install the dependencies:

```
npm install
```

* Then create a public Flickr gallery.
![Flickr Screenshot](/README_assets/flickr-screenshot.png? "Flickr Gallery")
Copy and paste the numbers at the end of the URL. In this case, the URL is 

```
https://www.flickr.com/photos/lfslearningcentre/albums/72157677186721265
````
So copy 
```
72157677186721265
```

* Then run the build.
```
npm run dev
```

Open the web browser to `http://localhost:8888/`

### To build the production package

```
npm run build
```

### Nginx Config

Here is an example Nginx config:
```
server {
	# ... root and other options

	gzip on;
	gzip_http_version 1.1;
	gzip_types text/plain text/css text/xml application/javascript image/svg+xml;

	location / {
		try_files $uri $uri/ /index.html;
	}

	location ~ \.html?$ {
		expires 1d;
	}

	location ~ \.(svg|ttf|js|css|svgz|eot|otf|woff|jpg|jpeg|gif|png|ico)$ {
		access_log off;
		log_not_found off;
		expires max;
	}
}
```

### Eslint
There is a .eslint.yaml config for eslint ready with React plugin.
To use it, you need to install additional dependencies though:

```
npm install --save-dev eslint eslint-plugin-react
```

To do the actual linting, run:

```
npm run lint
```

### Notes on importing css styles
* styles having /src/ in their absolute path are considered part of the application and exported as local css modules.
* other styles are considered global styles used by many components and are included in the css bundle directly.

### Contribute
Please contribute to the project if you know how to make it better, including this README :)
