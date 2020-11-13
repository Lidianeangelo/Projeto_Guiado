const contatosCollection = require("../model/contatoSchema")

const getAllContatos = (request, response) => {
    contatosCollection.find((error, contatos) => {
        if (error) {
            return response.status(500).send(error)
        } else {
            return response.status(200).json({
                mensagem: "Tudo certo",
                contatos
            })
        }
    })
}


const getContatosById=(request,response)=>{
    const id=request.params.id

    contatosCollection.find({_id:id},(error,contatos)=>{
        if (error){
            return response.status(500).send(error);
        }else if (contatos){
            return response.status(400).send({
                mensagem: "GET por ID feito com sucesso",
                contatos
            })

        }else{
            return response.status(404).send("Id não encontrado")
        }
       
    })
}

const getContatosByNome=(request,response)=>{
    const nome=request.params.nome

    contatosCollection.find({nome:nome},(error,contatos)=>{
        if (error){
            return response.status(500).send(error);
        }else if (contatos){
            return response.status(400).send({
                mensagem: "GET por nome feito com sucesso",
                contatos
            })

        }else{
            return response.status(404).send("Nome não encontrado")
        }
       
    })
}



const addContato = (request, response) => {
    const contatoBody = request.body //pegando o body que o usuario digitou
    const contatos = new contatosCollection(contatoBody) //criando um novo dado com o body
    
    contatos.save((error)=>{
        if(error){
            return response.status(400).send(error)
        }else{
            return response.status(200).send({
                mensagem:"POST com sucesso",
                contatos
            })
        }
    })
}



module.exports = {
    getAllContatos,
    getContatosById,
    getContatosByNome,
    addContato
}