# React-Redux-Saga-Ducks Boilerplate
A react, redux, redux-saga, ducks module boilerplate

# Development
1. Make sure you have [Node.js](https://nodejs.org/en/) installed
2. Verify by running `node -v` and `npm -v`
3. Clone the repo sitory
```ssh
git clone git@github.com:iamdevlinph/react-redux-saga-ducks-boilerplate.git
```
4. Go to the directory `cd react-redux-saga-ducks-boilerplate`
5. Run `npm install` to install dependencies
6. Run `npm run start` to start the project
7. Open [http://localhost:3000/](http://localhost:3000/) in your browser

# Deployment
This deployment is only for gh-pages in order to have a live preview of the app
1. Run `npm start deploy`
2. Open the app using this [link](https://iamdevlinph.github.io/react-redux-saga-ducks-boilerplate/)
3. You may need to do a hard refresh `Shift + F5` in order for changes to reflect

This will deploy the build files to the branch `gh-pages` in which Github uses to serve the app. [Read more about github pages](https://pages.github.com/)

# Folder Structure
```

```
Read more about each directory in each directory's `README.md`

# Notes
This project was created using `create-react-app` and without running the `npm eject` command because it puts lots of dependencies in the package.json, and it removes support from `create-react-app` future updates.

## SCSS and CSS Files

I decided to use `scss` because of the `nesting` feature. Now, since we didn't do the `npm eject`, we're not allowed to touch the webpack config so we can't add a `scss-loader`. That's why we installed `node-sass-chokidar`. Read more about that [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc)

Basically what we have right now is that the `scss` files are compiled to `css` files on runtime that's why in the app we use `import ./<file_name>.css` - we're  using the compiled css files from scss.

The `.css` files are ignored in git. But if you want to hide them from your VS Code explorer.
1. Open your settings by `Ctrl + ,`
2. Add the following option
```
"files.exclude": {
  "**/*.css": true
},
```

# Libraries Used

### Core
* React
* Redux
* Redux-Saga
* [Animate.css](https://daneden.github.io/animate.css/) (not via npm)
* [node-sass-chokidar](https://www.npmjs.com/package/node-sass-chokidar) (add support for sass in create-react-app)

---

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
Read the original [README.md](/README-original.md)
