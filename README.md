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

# Scalable web application
* Cloud Storage
    * cloud storage makes it easy to scale and provides greater security
    * Initial investment is relatively low
    * cloud databases (heroku with postgres, google cloud) options helps to meet project requirement
* Caches
    * caching data helps in reducing the hits to server which in turn reduces traffic and also provides 
    data to user in quick span.
    * spreading cache geographically would help in less hops to return data to user
* Load Balancing
    * load balancing comes in handy for horizontal scaling. 
    * ensures that the traffic is spread across the nodes rather than sending all hits to
    single machine
* Proxy
    * proxies also come in handy for horizontal scaling
    * the hits on the server is reduces as proxies can cache the result and return the data
    back rather than making a hit on server
    
* Micro services
  * >[independent deployable services](https://martinfowler.com/articles/microservices.html)
  * reduces the stress of monolithic architecture
* API Gateway
  * single point of entry for clients to communicate with the backend
  * reduces the hop for request to complete
  * can route request to multiple node to get quicker response
  * Diagram
  ![diagram](https://github.com/amangalvedhekar/walmart-take-home/blob/master/scalable-web-app.png)

