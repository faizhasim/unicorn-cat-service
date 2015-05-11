# unicorn-cat-service

> Because unicorn cat with circles is the thing in 2015-05-11

## Getting Started

1. Install [graphicsmagick](http://www.graphicsmagick.org/).

2. Install NPM

    npm install
    
3. Run the web app on port 3000

    npm start

  
## Endpoints

`/health` - To test the app server. Expected response will be `{"status": "Ok"}`.

`/unicorncat` - Should produce a 256x205 pixels unicorn cat image with 8 red-colored circles at the bottom. 