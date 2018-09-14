This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Setup
* Please ensure the node version on the machine is `v8` and above
* For server and client app to run concurrently ensure that `concurrently` and `nodemon` 
is installed globally `npm i -g nodemon concurrently`
* Alternatively `npm i` can be run from the root of the project
* To start the application run `npm run dev` from root of the project

# Deployed App
* If for any reason the app fails to run locally please view [here](https://walmart-take-home.herokuapp.com/)
* The app is deployed on heroku along with `redux dev tools extension` to have
a visual look at the `redux store`

# App structure
* Client folder holds all the code related to `react, redux, css`
* `server.js` serves endpoint `/cars`,  `/availability` which uses `express`

# Design
* Simple card used for rendering car details - [codepen](https://codepen.io/amangalvedhekar/pen/oPqZmM)
* Grid Layout using grid templates - [codepen](https://codepen.io/amangalvedhekar/pen/aaYmRE)


