import express, { response } from 'express'

const app = express()

app.get("/", (req, res) => {
    return res.json({message: "Hello World"})
})

app.post("/", (req, res) => {
   return res.json({message: "Os dados foram salvos com sucesso!"}) 
})

app.listen(3333, () => console.log("Server is running"))