import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import multer from "multer";


const app = express();
const PORT = 8800;

dotenv.config();
app.use(express.json());
app.use(morgan("common"));
app.use(cors());

app.get("/", (req, res) => {
    res.status(200).send({
        message: "Hello from AWS Node Server"
    })
})

app.listen(PORT, () => {
    console.log("listening to port", PORT);
})