import * as express from "express";
import { Express } from "express";
import { getNutritionData } from "../services/nutrition-data_service";
import { getTotalCalories } from "../services/get_total_calories";
// import { getTimeToBurn } from "../services/get_time_to_burn";
import * as exercisesController from "../controllers/exercises_controller";

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
  apiRouter.get("/nutrition/:ingredients", async (req, res) => {
    const ingredients = req.params.ingredients;
    // console.log("Ingredients--->", ingredients);
    if (ingredients === "") {
      res.status(500).send({ message: "Invalid ingredient list" });
      return;
    }

    const nutrition = await getNutritionData(ingredients);
    console.log("nutrition--->", nutrition);
    //res.status(200).send(ingredientsInfo);

    const result = await getTotalCalories(nutrition);
    // const requiredCals = await getTimeToBurn(result);
    res.status(200).send(result);
  });
  //this route allows clients to GET exercises
  console.log("📨  Adding GET exercise route...");
  apiRouter.get("/exercises", exercisesController.getExercises);

  console.log("🛠️  Applying API router to Express server...");
  app.use("/api", apiRouter);
}
