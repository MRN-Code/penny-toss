# Penny Toss

_Front end upload “tosser” for [penny-collector](https://github.com/MRN-Code/penny-collector)._

## Setup

Make sure you have [Node.js](https://nodejs.org/en/) (and NPM) installed on your machine. Then:

1. Clone the project: `git clone git@github.com:MRN-Code/penny-toss.git`
2. Run `npm install` in the project directory
3. Run `npm start` to start the development server
4. Open <http://localhost:3000> in your browser

You’ll also need a [tus](http://tus.io/) server for file uploads. More information on setting it up is forthcoming.

## Development

This project follows a client-side application approach. It uses the following libraries:

* [React.js](https://facebook.github.io/react/) for views
* [Redux](http://redux.js.org/) for state management
* [Redux Router](https://github.com/rackt/redux-router) for client-side routing
* [tus](http://tus.io/) for resumable file uploads
