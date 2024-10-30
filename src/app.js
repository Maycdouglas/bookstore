import express from "express"
import conectarDatabase from "./config/connectdatabase.js"

const conexao = await conectarDatabase()

const app = express()

export default app