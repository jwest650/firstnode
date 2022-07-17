import express from "express";
import path from "path";
import {
    addbook,
    addbookPage,
    editbooks,
    getbooks,
} from "./controller/controller.js";
const __dirname = path.resolve();
const app = express();
app.use(express.json());
app.use(
    express.urlencoded({
        extended: false,
    })
);
app.use("/", express.static(path.join(__dirname, "src/public")));

app.get("/books", getbooks);
app.get("/addbook", addbookPage);
app.post("/addbook", addbook);
app.post("/books", editbooks);
app.listen(3000, () => {
    console.log("server runing on port 3000");
});
