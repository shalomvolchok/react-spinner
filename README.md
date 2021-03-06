# React Spinner

Light weight reactJS spinner/loader. An example usage could be to show this loading spinner while data is loading, such as an asynchronous request to load data for a view.

## Demo & Examples

Live demo: [monish001.github.io/react-spinner](http://monish001.github.io/react-spinner/)

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Installation

The easiest way to use react-spinner is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-spinner.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install reactjs-spinner --save
```


## Usage

- In your react component
```
var ReactSpinner = require('reactjs-spinner');

<ReactSpinner>Example</ReactSpinner>
```
- In the root HTML file
```
<link rel="stylesheet" href="../../dist/react-spinner.min.css">
```

### Properties

* size (number) (default value- 20)

## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## License

react-spinner is released under the [MIT License](http://opensource.org/licenses/MIT).
