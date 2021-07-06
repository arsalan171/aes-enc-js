# aes-enc-js

[![Build Status](https://travis-ci.org/videojs/aes-enc-js.svg?branch=master)](https://travis-ci.org/videojs/aes-enc-js)
[![Greenkeeper badge](https://badges.greenkeeper.io/videojs/aes-decrypter.svg)](https://greenkeeper.io/)
[![Slack Status](http://slack.videojs.com/badge.svg)](http://slack.videojs.com)

[![NPM](https://nodei.co/npm/aes-enc-js.png?downloads=true&downloadRank=true)](https://nodei.co/npm/aes-enc-js/)

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Description
## Installation

```sh
npm install --save aes-enc-js
```
Also available to install globally:
```sh
npm install --global aes-enc-js
```

## Usage
To include decrypter on your website or npm application, use any of the following methods.
```js
const { encrypt, decrypt } =  require("aes-enc-js");
const T = "This text is going to encrypt.";
const E = encrypt(T);
const D = decrypt(E);
console.log("ORIGINAL TEXT IS "+ T);
console.log("ENCRPYTED TEXT IS " + E);
console.log("DECRPYTED TEXT IS " + D);
```
## [License](LICENSE)
Apache-2.0. Copyright (c) Brightcove, Inc.

