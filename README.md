# README #

### What is this repository for? ###

* An app for Boilerplate
* Version 0.5.0
* Starting a project with React 15.4.2, Webpack 1, and subsequent relational dependencies


### How do I get set up? ###

```bash

npm install

```
To Run the app with a single word command you should install a couple np's globally
```bash

npm install -g webpack nodemon
```
Then issue the command to webpack and monitor app directory for changes.
```bash

nodemon
```
Or, run a Dev environment with webpack-dev-server instead of nodemon
```bash

npm run-script development
```

for compiling a distribution folder which you can run from any web server.

```bash

webpack
```
upload the public folder to your Node server, wherever that may be, and have your server run server.js
```bash

node server.js
```

Add Aliases to the webpack.config.js file for making more components and sub-components and api directors

Currently uses foundation as the Boilerplate UI for components and prototyping. I strongly suggest designing your own look so your app isn't all foundation-esque, but it gives you a good place to start with semantic naming conventions.

### CONNECT FIREBASE ###
1. for now, create a file in the root of the repo with the other configs called ```firebaseConf.js```
2. Setup a firebase account at https://firebase.google.com
3. From your account overview click "Add Firebase to your web app" and copy the config object {}
4. Paste/replace in the following to replace with your ```key:value``` pairs from your firebase db

```javascript
const firebaseConf = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
}
export default firebaseConf
```
NOTE: I'll probaby change this later to grab a JSON object from Heroku app options or something as a default.  


### Contribution guidelines ###

Be Nice

### Who do I talk to? ###

* Repo owner or admin
