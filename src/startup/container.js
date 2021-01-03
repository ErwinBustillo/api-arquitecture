// SETUP CONTAINER DEPENDENCIES INJECTIONS
const { createContainer, asClass, asValue, asFunction } = require("awilix");

//services
const { HomeService } = require("../services");

//controllers
const { HomeController } = require("../controllers");

// routes
const { HomeRoutes } = require("../routes/index.routes");
const Routes = require("../routes");

//config
const config = require("../config");
const app = require(".");

// models
const { User, Idea, Comment } = require("../models");

// repositories
const {
  UserRepository,
  IdeaRepository,
  CommentRepository,
} = require("../repositories");

//services
const { UserService, IdeaService, CommentService } = require("../services");

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
    app: asClass(app).singleton(),
  })
  .register({
    User: asValue(User),
    Idea: asValue(Idea),
    Comment: asValue(Comment),
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
    IdeaRepository: asClass(IdeaRepository).singleton(),
    CommentRepository: asClass(CommentRepository).singleton(),
  })
  .register({
    UserService: asClass(UserService).singleton(),
    IdeaService: asClass(IdeaService).singleton(),
    CommentService: asClass(CommentService).singleton(),
  });

module.exports = container;
