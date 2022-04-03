import express from "express"
const app = express()
app.get("/", (request, response) => response.json({mensagem: "Hello World!"}))
app.listen(3333, ()=> console.log("Running..."))