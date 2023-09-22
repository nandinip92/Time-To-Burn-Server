import * as express from "express";
import { Express } from "express";
import * as nutritionInfoController from "../controllers/nutrition_data_controller";
// import { getTimeToBurn } from "../services/get_time_to_burn";
import * as exercisesController from "../controllers/exercises_controller";
import { getExercises } from "../services/exercises";

export function initialiseRoutes(app: Express) {
  console.log("🏗️  Setting up routers...");

  addHealthCheck(app);

  addAPIRoutes(app);
}

function addHealthCheck(app: Express) {
  console.log("🛠️  Creating base router...");

  const baseRouter = express.Router();

  baseRouter.use((req, res, next) => {
    res.header("Access-Control-Allow-Methods", "GET");
    console.log(`📨 ${req.url}`);
    next();
  });

  console.log("🏠❤️‍🩹  Adding health check route...");
  baseRouter.get("/health", (req, res) => {
    res.status(200).send("👍 Okay! The server is responding! 🙌");
  });

  console.log("🛠️  Applying base router to Express server...");
  app.use("/", baseRouter);
}

// this function adds all the routes we can access by going to /api/[someRoute]
function addAPIRoutes(app: Express) {
  console.log("🛠️  Creating API router...");

  const apiRouter = express.Router();
  apiRouter.use((req, res, next) => {
    // we'll use this router to return specifically JSON
    res.setHeader("Content-Type", "application/json");
    next();
  });
  //this route allows clients to GET nutrition
  console.log("📨  Adding GET nutrition route...");
  apiRouter.get(
    "/nutrition/:ingredients",
    nutritionInfoController.getNutritionInfo
  );

  console.log("🛠️  Applying API router to Express server...");
  app.use("/api", apiRouter);
}
