import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import morgan from "morgan";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'pages', 'index.html'));
});

app.post("/dashboard", (req, res) => {
    console.log(req.body);
    res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'pages', 'dashboard.html'));
});

/* Mounting Middleware */
/* !--- Middleware order is IMPORTANT */
app.use(express.static("../../frontend/public"));

app.use(bodyParser.urlencoded({ extended: true }));

/* Mounting Middleware - Morgan*/
app.use(morgan('tiny'))
