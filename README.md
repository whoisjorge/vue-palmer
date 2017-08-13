
<div align="center">
<br>
<img width="500" src="./docs/header.png" alt="vue-palmer" />
<br>
<br>
</div>

<p align="center" color="#ccc">Develop web applications with no build configuration until you need.</p>

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
- State preserving compilation error overlay
- ESLint support with Lint-on-save
- HTML/CSS/JS pre-processors support with [vue-loader](https://vue-loader.vuejs.org)
- Source Maps
- **Production ready build with:**
  - JavaScript minified with [UglifyJS](https://github.com/mishoo/UglifyJS2).
  - HTML minified with [html-minifier](https://github.com/kangax/html-minifier).
  - CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano).

_All static assets compiled with version hashes for efficient long-term caching, and a production `index.html` is auto-generated with proper URLs to these generated assets._


### Highlights

- Vuex
- vue-router
- Webpack
- jQuery
- GSAP - TweenMax
- Bulma
- Animate CSS
- Font Awesome
- and the handy __npm__ for everybody!


## Getting Started

Make sure you have [Node](https://nodejs.org) ( >= 4.0) and [npm](https://www.npmjs.com/) ( >= 3.0) 

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
+ The server will be launched at `localhost:8080`

##### Build for production?
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
│   ├── index.js                # mount to DOM . run `app.js`
│   ├── App.vue                 # main(root) app component
│   │
│   ├── assets/                 # module assets (processed by webpack)
│   │   ├── ...               
│   │   └─── sass/              # application stylesheets . `app.scss`
│   │
│   ├── router/                 # main router
│   │   └── index.js
│   ├── store/                  # (dev)
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

1. Fork the repository!
2. Create a new feature branch : `git checkout -b your-feature`
3. Commit changes : `git commit -am 'my new feature!'`
4. Push : `git push origin your-feature`

**PR's are very welcome!** :fire: :fire: :fire:


## License
This project is licensed under the open source MIT License - see the [LICENSE] file for details.


<div align="center"><a href="#readme">:palm_tree:</a></div>


[LICENSE]: ./LICENSE
[CONTRIBUTORS]: /contributors
