import express from "express";
import cors from "cors";

const app = express();

app.use(cors());  
app.use(express.json());  

app.listen(3001, () => {
    console.log("Server started on port 3001");
}).on("error", (err) => {
    console.log(err);
});
