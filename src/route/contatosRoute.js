const express=require("express")
const router=express.Router()
const controller=require("../controller/contatosController")

router.get("/", controller.getAllContatos)
//router.post("/criar", controller.addContato)
//router.get("/contatos/nome/",)

module.exports=router