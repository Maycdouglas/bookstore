import {autor} from "../models/Autor.js"

class AutorController {
    static async listarAutores(req, res){
        try {
            const listaAutores = await autor.find({})
            res.status(200).json(listaAutores)
        } catch (erro) {
            res.status(500).json({mensagem: `${erro.menssage} -  Falha ao listar autores.`})
        }
    }

    static async cadastrarAutor(req, res){
        try {
            const novoAutor = await autor.create(req.body)
            res.status(201).json({ mensagem: "Criado com sucesso!", autor: novoAutor })
        } catch (erro) {
            res.status(500).json({mensagem: `${erro.message} - Falha ao cadastrar autor`})
        }
    }

    static async listarAutorPorId(req, res){
        try {
            const id = req.params.id
            const autorEncontrado = await autor.findById(id)
            res.status(200).json(autorEncontrado)
        } catch (erro) {
            res.status(500).json({mensagem: `${erro.message} - Falha ao encontrar autor`})
        }
    }

    static async atualizarAutor(req, res){
        try {
            const id = req.params.id
            await autor.findByIdAndUpdate(id, req.body)
            res.status(200).json({mensagem: `Autor atualizado!`})
        } catch (erro) {
            res.status(500).json({mensagem: `${erro.message} - Falha ao atualizar autor`})
        }
    }

    static async deletarAutor(req, res){
        try {
            const id = req.params.id
            await autor.findByIdAndDelete(id)
            res.status(200).json({mensagem: `Autor deletado!`})
        } catch (erro) {
            res.status(500).json({mensagem: `${erro.message} - Falha ao deletar autor`})
        }
    }

}

export default AutorController