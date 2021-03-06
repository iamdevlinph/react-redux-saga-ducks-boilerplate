# React-Redux-Saga-Ducks Boilerplate
A react, redux, redux-saga, ducks pattern boilerplate. To be used as a starter kit for future projects. [Demo](https://iamdevlinph.github.io/react-redux-saga-ducks-boilerplate/).

# Includes
* React v16
* Redux
* Redux-Saga
* React Router v4
* [Ducks pattern](https://github.com/erikras/ducks-modular-redux)
* SCSS
* Webpack v3
* [node-sass-chokidar](https://www.npmjs.com/package/node-sass-chokidar) (add support for sass in create-react-app)
* ES Lint

# Development
1. Make sure you have [Node.js](https://nodejs.org/en/) installed
2. Verify by running `node -v` and `npm -v` (at the time of writing: v6.11.0 and v3.10.10, respectively)
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
1. Edit the `homepage` property in `package.json` into `https://<username>.github.io/<repository>/`
2. Run `npm start deploy`
3. Open the app using the link in step 1 `https://<username>.github.io/<repository>/`
4. You may need to do a hard refresh `Shift + F5` in order for changes to reflect

This will deploy the build files to the branch `gh-pages` in which Github uses to serve the app. [Read more about github pages](https://pages.github.com/)

# Folder Structure
```
app/
  .vscode/
  public/
    favi.ico
    index.html
  src/
    components/
    containers/
    ducks/
    routes/
    sagas/
    services/
    styles/
  .eslintignore
  .eslintrc.js
  .gitignore
  package.json
  README.md
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

# Milestones
- [ ] Integrate code splitting using [React Loadable](https://github.com/thejameskyle/react-loadable)
- [ ] Integrate selector library using [Reselect](https://github.com/reactjs/reselect)
- [ ] Integrate google-like class naming using [styled components](https://github.com/styled-components/styled-components)
- [ ] Integrate tests
- [ ] Integrate material design
- [ ] Implement proper eslinting
---

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
Read the original [README.md](/README-original.md)
