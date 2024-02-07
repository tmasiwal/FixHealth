const express = require('express');
const cors = require("cors");
const app = express();
const Connection=require("./db")
const doctorsRoutes=require("./routes/doctors")
app.use(express.json());
app.use(cors());
app.use("/doctors",doctorsRoutes)








app.listen(8080, async()=>{
    try {
        await Connection

        console.log("port is running at http://localhost:8080 ");
    } catch (error) {
        console.log("Error",error);
    }
})