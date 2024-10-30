import mongoose from "mongoose"

export default async function conectarDatabase() {
    mongoose.connect(DB_CONNECTION_STRING)
    return mongoose.connection
}