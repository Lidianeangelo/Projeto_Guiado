const mongoose=require("mongoose")

const DB_URL="mongodb://localhost:27017/reprograma"

const connect=()=>{
    mongoose.connect(DB_URL,{useNewUrlParser: true})
    const connection=mongoose.connection

    connection.on("error", ()=> console.error("Erro ao se conectar com o servidor"))
    connection.once("open",()=> console.log("Servidor conectado, linda!"))
}

module.exports={connect}
//chaves exporta a função, sem a chaves exporta o arquivo todo

//arquivo Repository CRIA a Conexão