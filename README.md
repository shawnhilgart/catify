catify
======

Middleware that redirects users at random to a cat gif via thecatapi.com

## Usage

```javascript

var catify = require('catify');
var express = require('express');
var app = new express();

app.use(catify(50)); // catify accepts one argument for probability

```

