import express from 'express'
import autores from "./autoresRoutes.js"
import livros from "./livrosRoutes.js"

const routes = (app) => {
    app.route("/").get((req,res) => res.status(200).send("Livraria"))

    app.use(express.json(), autores, livros)
}

export default routes