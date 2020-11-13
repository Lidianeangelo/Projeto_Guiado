const mongoose=require("mongoose")
const Schema=mongoose.Schema

const contatoSchema=new Schema({
    _id:{
        type:mongoose.Schema.Types.ObjectId, //tipo de dado dentro do mongoose de id
        auto:true,
        required:true

    },
    nome:{
        type: String,
        required: true
    },
    celular:{
        type: String, //quando os números não forem pra cálculo
        required: true
    },
    dataNascimento:{
        type:Date,
        required:true
    },
    fotoPerfil:{
        type:String,
        required: false
    }
})

const contatosCollection=mongoose.model("contato", contatoSchema)

module.exports=contatosCollection