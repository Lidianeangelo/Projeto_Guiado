const express=require("express")
const app=express()
const cors=require("cors")

const db = require("../src/model/repository")
db.connect()

app.use(cors())
app.use(express.json())

const index=require("../src/route/index")
const contatos=require("../src/route/contatosRoute")


app.use("/", index)
app.use("/contatos", contatos)

module.exports=app