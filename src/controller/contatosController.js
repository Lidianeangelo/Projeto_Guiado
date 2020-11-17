const { response } = require("express")
const contatosCollection = require("../model/contatoSchema")

const getAllContatos = (request, response) => {
    contatosCollection.find((error, contatos) => {
        if (error) {
            return response.status(500).send(error)
        } else {
            return response.status(200).json({
                //mensagem: "Tudo certo",
                contatos
            })
        }
    })
}


const getContatosById = (request, response) => {
    const id = request.params.id

    contatosCollection.find({ _id: id }, (error, contatos) => {
        if (error) {
            return response.status(500).send(error);
        } else if (contatos) {
            return response.status(200).send({
                //mensagem: "GET por ID feito com sucesso",
                contatos
            })

        } else {
            return response.status(404).send("Id não encontrado")
        }

    })
}

const getContatosByNome = (request, response) => {
    const nome = request.params.nome

    contatosCollection.find({ nome: nome }, (error, contatos) => {
        if (error) {
            return response.status(500).send(error);
        } else if (contatos) {
            return response.status(400).send({
                mensage: "Nome não encontrado"
            })

        } else {
            return response.status(200).send({
                mensage: "Nome encontrado",
                contatos
            })
        }

    })
}



const addContato = (request, response) => {
    const contatoBody = request.body //pegando o body que o usuario digitou
    const contatos = new contatosCollection(contatoBody) //criando um novo dado com o body

    contatos.save((error) => {
        if (error) {
            return response.status(400).send(error)
        } else {
            return response.status(200).send({
                mensagem: "Cadastro feito!",
                contatos
            })
        }
    })
}

const deleteContatoById = (request, response) => {
    const idParam = request.params.id
    contatosCollection.find({ _id: idParam }, (error, contatos) => {
        if (!contatos || error) {
            return response.status(400).send("Contato não encontrado")
        } else {
            return response.status(200).send("Contato deletado com sucesso!")
        }
    })
}

const updateTelefone = (request, response) => {
    const id = request.params.id
    const body = request.body
    const update = { new: true }

    //tratamento do erro - fazer

    contatosCollection.findOneAndUpdate({ _id: id }, body, update, (error, contatos) => {
        if (error) {
            return response.status(400).send(error)
        } else {
            return response.status(200).send({ mensage: 'Número de celular atualizado com sucesso!', contatos })
        }
    })
}



module.exports = {
    getAllContatos,
    getContatosById,
    getContatosByNome,
    addContato,
    deleteContatoById,
    updateTelefone
}