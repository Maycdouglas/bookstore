import livro from "../models/Livro.js"
import { autor } from "../models/Autor.js"

class LivroController {
    static async listarLivros(req, res){
        try {
            const listaLivros = await Livro.find({})
            res.status(200).json(listaLivros)
        } catch (erro) {
            res.status(500).json({mensagem: `${erro.message} -  Falha ao listar livros.`})
        }
    }
    
    static async cadastrarLivro(req, res){
        const novoLivro = req.body
        
        try {
            constAutorEncontrado = await autor.findById(novoLivro.autor)
            const livroCompleto = {...novoLivro, autor: {...constAutorEncontrado._doc}}
            const livroCriado = await livro.create(livroCompleto)
            res.status(201).json({mensagem: "Criado com sucesso", livro: livroCriado})
        } catch (erro) {
            res.status(500).json({mensagem: `${erro.message} -  Falha ao cadastrar livro.`})
        }
    }

    static async listarLivroPorId(req, res){
        try {
            const id = req.params.id
            const livroEncontrado = await livro.findById(id)
            res.status(200).json(livroEncontrado)
        } catch (erro) {
            res.status(500).json({mensagem: `${erro.message} - Falha ao encontrar livro`})
        }
    }

    static async atualizarLivro(req, res){
        try {
            const id = req.params.id
            const autorEncontrado = await autor.findById(req.body.autor)
            const body = req.body
            body.autor = autorEncontrado
            await livro.findByIdAndUpdate(id, body)
            res.status(200).json({mensagem: `Livro atualizado!`})
        } catch (erro) {
            res.status(500).json({message: `${error.message} - Falha ao atualizar livro`})
        }
    }

    static async deletarLivro(req, res){
        try {
            const id = req.params.id
            await livro.findByIdAndDelete(id)
            res.status(200).json({mensagem: `Livro deletado!`})
        } catch (erro) {
            res.status(500).json({mensagem: `${erro.message} - Falha ao deletar livro`})
        }
    }

    static async listarLivrosPorEditora(req,res){
        const editora = req.query.editora
        try {
            const livrosPorEditora = await livro.find({editora: editora})
            res.status(200).json(livrosPorEditora)
        } catch (erro) {
            res.status(500).json({mensagem: `${erro.message} - Falha ao buscar livros`})
        }
    }

}

export default LivroController