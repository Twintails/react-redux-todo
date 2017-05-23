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

npm run develop
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

### CONNECT FIREBASE with ENVIRONMENT VARS ###
1. reanme the config/development.env-example to config/development.env
1. reanme the config/test.env-example to config/test.env
1. Setup a firebase account at https://firebase.google.com
1. Create a firebase project for development data and a second for test data
1. From each project overview click "Add Firebase to your web app" to get the config object {}
1. Copy the values for each to the respective config/{}.env
1. in each firebase project Database under rules tab set ".read" and ".write" to true *(FOR NOW UNTIL AUTH IS ADDED)*
1. If you are using heroku setup the same Config Variables as shown in the examples API_KEY, AUTH_DOMAIN, ...etc
1. In your NON-Test Project on Firebase under Authentication, SIGN-IN Method add your heroku domain to the OAuth redirect domains table


### We've got tests, yep ###

After following the setup and firebase steps above. The tests should pass with
```bash

npm test
```

### Contribution guidelines ###

Be Nice

### Who do I talk to? ###

* Repo owner or admin
