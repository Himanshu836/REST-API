const express = require("express")
const mongoose = require("mongoose")
const crud = require("./model/model")
const app = express()
const routers= require("./routers/router")

mongoose.connect("mongodb://localhost/crud")

app.use(express.json())
app.use("/routers",routers)

app.listen(4000)