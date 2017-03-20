# README #

### What is this repository for? ###

* An app for Boilerplate
* Version 0.5.0
* Starting a project with React 15.4.2, Webpack 1, and subsequent relational dependencies 


### How do I get set up? ###

```
#!bash

npm install

```
To Run the app with a single word command you should install a couple np's globally
```
#!bash

npm install -g webpack nodemon
```
Then issue the command to webpack and monitor app directory for changes.
```
#!bash

nodemon
```
Or, run a Dev environment with webpack-dev-server instead of nodemon
```
#!bash

npm run-script development
```

for compiling a distribution folder which you can run from any web server.

```
#!bash

webpack
```
upload the public folder to your Node server, wherever that may be, and have your server run server.js
```
#!bash

node server.js
```

Add Aliases to the webpack.config.js file for making more components and sub-components and api directors

Currently uses foundation as the Boilerplate UI for components and prototyping. I strongly suggest designing your own look so your app isn't all foundation-esque, but it gives you a good place to start with semantic naming conventions.

### Contribution guidelines ###

Be Nice

### Who do I talk to? ###

* Repo owner or admin# README #
