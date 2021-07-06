# aes-enc-js

[![Build Status](https://travis-ci.org/videojs/aes-enc-js.svg?branch=master)](https://travis-ci.org/videojs/aes-enc-js)
[![Greenkeeper badge](https://badges.greenkeeper.io/videojs/aes-decrypter.svg)](https://greenkeeper.io/)
[![Slack Status](http://slack.videojs.com/badge.svg)](http://slack.videojs.com)

[![NPM](https://nodei.co/npm/aes-enc-js.png?downloads=true&downloadRank=true)](https://nodei.co/npm/aes-enc-js/)

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation

```sh
npm install --save aes-enc-js
```
Also available to install globally:
```sh
npm install --global aes-enc-js
```

## Usage
To include aes-enc-js on your website or npm application, use any of the following methods.

## ES5
```js
const { encrypt, decrypt } =  require("aes-enc-js");
```
## ES6
```js
import { encrypt, decrypt } =  "aes-enc-js";
```

```js
const T = "This text is going to encrypt.";
const E = encrypt(T);
const D = decrypt(E);
console.log("ORIGINAL TEXT IS "+ T);
console.log("ENCRPYTED TEXT IS " + E);
console.log("DECRPYTED TEXT IS " + D);
```
Change secret key from index.js file.
```js
const K = "4951882490015028";
```
## [License](LICENSE)
Apache-2.0. Copyright (c) Arsalan Akhtar, Inc.

