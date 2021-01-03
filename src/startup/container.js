// SETUP CONTAINER DEPENDENCIES INJECTIONS
const { createContainer, asClass, asValue, asFunction } = require("awilix");

//services
const { HomeService } = require("../services");

//controllers
const { HomeController } = require("../controllers");

// routes
const { HomeRoutes } = require("../routes/index.routes");
const Routes = require("../routes")

//config
const config = require("../config")
const app = require(".")

const container = createContainer();

container
  .register({
    HomeService: asClass(HomeService).singleton(),
  })
  .register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
  })
  .register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
  })
  .register({
    router: asFunction(Routes).singleton(),
    config: asValue(config),
    app: asClass(app).singleton()
  })

module.exports = container;
