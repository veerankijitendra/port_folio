import express from "express";
import cors from "cors";
import commonRoutes from "./routes/commonRoutes";

const app = express();

const port: number = 5000;
app.use(cors());
app.use(express.json());
app.use(commonRoutes);

function runApp() {
  app.listen(port, () => {
    console.log(`Application is running at port ${port}`);
  });
}

runApp();
