import express from "express"
import conectarDatabase from "./config/connectdatabase.js"
import chalk from "chalk"

const conexao = await conectarDatabase()

conexao.on("error", (erro) => {
    console.error(chalk.red("Erro de conexão", erro))
})

conexao.once("open", () => {
    console.log(chalk.blue("Conexão com o banco de dados realizada com sucesso!"))
})

const app = express()

export default app