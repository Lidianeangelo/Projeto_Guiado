const express=require("express")
const app=express()
const cors=require("cors")

app.use(cors())
app.use(express.json())

const index=require("./route/index")
//const contatos=require("./routes/contatosRoute")


app.use("/", index)
//app.use("/contatos", contatos)

module.exports=app