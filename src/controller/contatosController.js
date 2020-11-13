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
    addContato
}