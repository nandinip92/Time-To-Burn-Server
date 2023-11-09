//import * as express from "express";
//import * as cors from 'cors';

import Express from "express";
import cors from "cors";
import { Server } from "http";
import * as dotenv from "dotenv";
import { initialiseRoutes } from "./routes/routes";
import { printNewLine } from "./helpers/helpers";
//const environment = process.env.NODE_ENV || "dev";
dotenv.config({ path: `.env.dev` });
const PORT = process.env.PORT;

console.log("💫 Initialising Server...");
export const app = Express();
try {
  printNewLine();

  console.log("👉 Enabling JSON middleware...");
  app.use(Express.json());

  console.log("👉 Enabling URL-Encoded middleware...");
  app.use(Express.urlencoded({ extended: true }));

  console.log("👉 Enabling CORS...");
  app.use(cors());

  initialiseRoutes(app);

  const server = app
    .listen(PORT, () => {
      console.log(`⭐ Server is now listening on port: ⚓ ${PORT} ⭐`);
      printNewLine();

      console.log(
        `⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐`
      );
      console.log(
        `⭐    Health check at "http://localhost:${PORT}/health"                                                                                                      ⭐`
      );
      printNewLine();
      console.log(
        `⭐    Or try "http://localhost:${PORT}/api/exercises"                                                                                                        ⭐`
      );
      printNewLine();
      console.log(
        `⭐    Or try "http://localhost:${PORT}/api/nutrition/onion"                                                                                                  ⭐`
      );
      console.log(
        `⭐    Or try "http://localhost:${PORT}/api/time2burn/ingredients/3kg%20chicken"                                                                              ⭐`
      );
      console.log(
        `⭐    Or try "http://localhost:${PORT}/api/nutrition/10oz%20onion%20and%20a%20tomato"                                                                        ⭐`
      );
      console.log(
        `⭐    Or try "http://localhost:${PORT}/api/nutrition/3lb%20carrots%20and%20a%20chicken%20sandwich"                                                           ⭐`
      );

      printNewLine();
      console.log(
        `⭐    Or try "http://localhost:${PORT}/api/time2burn/ingredients/onion/exercise/Cycling/weight/130"                                                          ⭐`
      );
      console.log(
        `⭐    Or try "http://localhost:${PORT}/api/time2burn/ingredients/3kg%20chicken/exercise/Running/weight/170"                                                  ⭐`
      );
      console.log(
        `⭐    Or try "http://localhost:${PORT}/api/time2burn/ingredients/10oz%20onion%20and%20a%20tomato/exercise/Swimming/weight/340"                               ⭐`
      );
      console.log(
        `⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐`
      );
    })
    .on("error", (error) => {
      console.error("🚨 Express Error Handler 🚨 ");
      console.error(error);
    });

  process.on("SIGINT", () => handleShutdown(server));
  process.on("SIGTERM", () => handleShutdown(server));
  process.on("SIGHUP", () => handleShutdown(server));
} catch (e: unknown) {
  console.error("🚨 Top level Error caught 🚨 ");
  console.error((e as Error).message);
}

function handleShutdown(server: Server) {
  console.log("🚪 Closing Server...");
  server.close(() => {
    console.log("🏥 Express server closed ✅");
    process.exit(0);
  });
}
