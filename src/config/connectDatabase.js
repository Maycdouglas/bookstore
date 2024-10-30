import mongoose from "mongoose"

export default async function conectarDatabase() {
    mongoose.connect(process.env.DB_CONNECTION_STRING)
    return mongoose.connection
}