import express from "express";
import cors from "cors"
const app = express();
app.use(cors())
const port = 8080;

app.get("/index", (req, res)=>{
    res.json({message: "HEllo world"})
})

app.listen(port, () => {
    console.log(`connected to port: ${port}`);
});
