import app from "./server";
import "dotenv/config";
import { NODE_ENV, PORT } from "./config/envs";
import { AppDataSource } from "./config/DataConfig";

const startDevelopmentServer = () => {
  app.listen(PORT || 4000, () => {
    console.log(`Server running on http://localhost:${PORT || 4000}`);
  });
};

const initialize = async () => {
  await AppDataSource.initialize();
  console.log("Database initialized");

  if (NODE_ENV === "development") {
    startDevelopmentServer();
  }
};

initialize();
