
<div align="center">
<br>
<img width="500" src="./docs/header.png" alt="vue-palmer" />
<br>
<br>
</div>

<p align="center" color="#ccc">Develop progressive web applications with no build configuration... until you need!</p>

<div align="center">

[![forthebadge](http://forthebadge.com/images/badges/made-with-vue.svg)](https://vuejs.org) [![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](https://webpack.js.org) [![forthebadge](http://forthebadge.com/images/badges/designed-in-ms-paint.svg)](http://www.whoisjorge.me)

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

</div>

<div align="center">
  <a href="https://travis-ci.org/whoisjorge/vue-palmer"> <img src ="https://travis-ci.org/whoisjorge/vue-palmer.svg?branch=master" alt="Build Status"/></a>
</div>


## Overview
This boilerplate includes an **initial Vue.js + Webpack setup** to help you get started quickly prototyping your new web applications. It's targeted at developers who want to start exploring the world of web applications without the distraction of a complicated development environments :crocodile:

> **This project was originally set up through [vue-cli](https://github.com/vuejs/vue-cli) tool** <br> For detailed documentation and how things work checkout the vuejs-templates [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Features

- Webpack + `vue-loader` with state preserving hot-reload
- Centralized state management with Vuex
- Route management with Vue-router
- State preserving compilation error overlay
- ESLint support with Lint-on-save
- HTML/CSS/JS pre-processors support with [vue-loader](https://vue-loader.vuejs.org)
- Source Maps
- **Production ready build with:**
  - JavaScript minified with [UglifyJS](https://github.com/mishoo/UglifyJS2).
  - HTML minified with [html-minifier](https://github.com/kangax/html-minifier).
  - CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano).
  - SEO friendly pre-rendering

_All static assets compiled with version hashes for efficient long-term caching, and a production `index.html` is auto-generated with proper URLs to these generated assets._


### Highlights

- [x] Vue2
- [X] Webpack 2
- [X] ESLint Standard
- [X] Vue Router
- [X] Vuex
- [X] Firebase
- [X] jQuery
- [X] GSAP - TweenMax
- [X] Bulma
- [X] Animate CSS
- [X] Font Awesome

<p align="right">...and the handy <b>npm</b> for everyone!</p>


## Getting Started

Make sure you have [Node](https://nodejs.org) and [npm](https://www.npmjs.com/) installed on your system. Check out [Yarn](https://yarnpkg.com/) too. Now it's time to prepare for that magical feeling :crystal_ball:

#### Install the dependencies :

```bash
git clone https://github.com/whoisjorge/vue-palmer.git
cd vue-palmer
npm i # or yarn
```

#### Launch the project :

```bash
npm start
```
+ The development server will be launched at `localhost:8080`


##### What about build for production?
```bash
npm run build
```


## Project Structure

``` bash
.
├── build/                      # webpack config files
│   └── ...
├── config/
│   ├── index.js                # main project config
│   └── ...
│
├── src/                        # app entry folder
│   │
│   ├── app.js                  #       r o o t
│   ├── App.vue                 #  ° ☾ ★ ¸. ¸. • ○ °
│   │
│   ├── assets/                 # module assets (processed by webpack)
│   │   ├── ...               
│   │   └─── sass/              # application stylesheets . `app.scss`
│   │
│   ├── app/                    # (dev_helpers)
│   │   └── ...
│   ├── router/                 # main router
│   │   └── index.js
│   ├── store/                  # Vuex centralized state management(dev)
│   │   └── ...
│   ├── filters/                # (dev)
│   │   └── ...
│   │
│   ├── components/             # app components
│   │   └── ...
│   └── views/                  # view components!
│       └── ...
│
├── static/                     # pure static assets file
│
├── test/
│
├── .babelrc                    # babel config
├── .editorconfig               # editor config
├── .eslintrc.js                # eslint config
├── .postcssrc.js               # postcss config
├── index.html                  # index.html SPA template
└── package.json                # build scripts and dependencies
```


## Available commands

| Command                     | Action                                                                     |
|:----------------------------|:-------------------------------------------------------------------------  |
| `npm run dev`               |  :sparkles: first-in-class development experience :sparkles:               |
| `npm run build`             |  build the application :hammer:                                            |
| `npm run build --report`    |  build for production and view the bundle analyzer report :bar_chart:      |
| `npm run unit`              |  run unit tests                                                            |
| `npm run e2e`               |  run e2e tests                                                             |
| `npm test`                  |  run all tests                                                             |


## Contributing

I know this is pretty much a self-development repository, but remember you can **Fork It And Make Your Own!** :fire:

Just in case:
- Create a new feature branch : `git checkout -b new-feature`
- _Write your code... and comment it!_
- Commit changes : `git commit -am 'Awesome new feature!'`
- Push to the branch : `git push origin new-feature`
- Submit a pull request


## License
This project is licensed under the open source MIT License - see the [LICENSE] file for details.


<div align="center"><a href="#readme">:palm_tree:</a></div>


[LICENSE]: ./LICENSE
