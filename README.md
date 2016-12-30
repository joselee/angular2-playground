### Angular 2 boilerplate
This project boilerplate is based on the official quickstart project at [angular.io](https://angular.io/docs/ts/latest/guide/setup.html).
It uses [gulp-typescript](https://www.npmjs.com/package/gulp-typescript) to transpile TS to JS.
In dev mode, the JS files are used directly from the `build/` folder. For production builds, 
[systemjs-builder](https://www.npmjs.com/package/systemjs-builder) is used to bundle all app code and all dependencies into one JS file.

Styling is done with [SASS](http://sass-lang.com/), and also compiled with gulp.


#### Prerequisites
* node, npm


#### Setup and run in development mode
* `npm install`
* `npm start`

#### Building for production
* `npm install`
* `npm run prod`
* The output files are in the `dist/` directory, ready to be shipped!