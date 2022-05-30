# [WebShot][https://github.com/loai-K/web-shot]
> Node API to Generate screenshots Images and PDFs of web pages.

[![WebShot][prject-image]][prject-url]
[![wiki][prject-wiki-image]][prject-wiki]
[![NodeJS Version][node-image]][node-url]
[![Express Version][express-image]][express-url]
[![NPM Version][npm-image]][npm-url]
[![YARN Version][yarn-image]][yarn-url]

you can take a screen shot from any web page using URL.

## Installation

* npm
```sh
cd [project] && npm install
```
```sh
npm start
npm run dev
```
* yarn
```sh
cd [project] && yarn
```
```sh
yarn start
yarn run dev
```

## Usage example

1- **Get Image:**
```json
POST /api/image/
Accept: application/json
Content-Type: application/json

{
    "url": "site-url",
    "file": "filename" 
}
```

* **Successful Response:**
```json
HTTP/1.1 200 OK
Content-Type: application/json

{
	"status": "success",
	"data": {
		"file": "filename.png",
		"format": ".png",
		"path": "http://localhost:3000/api/image/filename.png"
	}
}
```

2- **Get PDF:**
```json
POST /api/pdf/
Accept: application/json
Content-Type: application/json

{
    "url": "site-url",
    "file": "filename" 
}
```

* **Successful Response:**
```json
HTTP/1.1 200 OK
Content-Type: application/json

{
	"status": "success",
	"data": {
		"file": "filename.pdf",
		"format": ".pdf",
		"path": "http://localhost:3000/api/pdf/filename.pdf"
	}
}
```


## Meta
Loai N Kanou – [@twitter](https://twitter.com/lo_oai) – loaikanou@gmail.com

 <br>
Thanks for your support.

<!-- Markdown link & img dfn's -->
[prject-image]: https://badgen.net/badge/loai-K/web-shot/dark?icon=github
[prject-url]: https://github.com/loai-K/web-shot
[prject-wiki-image]: https://badgen.net/badge/icon/wiki?icon=wiki&label
[prject-wiki]: https://github.com/loai-K/web-shot/wiki
[node-image]: https://img.shields.io/node/v/npm?label=node%20js&logo=nodejs
[node-url]: https://nodejs.org/en/
[express-image]: https://badgen.net/npm/v/express
[express-url]: https://expressjs.com
[npm-image]: https://badgen.net/npm/v/npm?label=&icon=npm&color=red
[npm-url]: https://npmjs.org
[yarn-image]: https://badgen.net/npm/v/yarn?label=yarn
[yarn-url]: http://yarnpkg.com