const express = require ("express")
const cors = require ("cors")
const path = require ("path")
const body_parser = require ("body-parser")
const clienteService = require("./clienteServices.js")

const app = express()
const port = 8087

app.use(cors())
app.use(body_parser.json())

const pathName = "/cliente"

app.get(pathName,
    (req, res)=>{
        console.log("Recibimos peticion")
        console.log(req)
        res.send(clienteService.clientesGetExport())
    }
)

app.get(pathName+"/id",
    async (req, res)=>{
        console.log("Recibimos peticion")
        let id = req.query.id
        res.send(await clienteService.clientesGetIdExport(id))
    }
)


app.post(pathName,
    (req, res)=>{
        console.log("Recibimos peticion")
        console.log(req.body)
        let clientes = clienteService.clientesSetExport(req.body)
        res.send({"mensaje":"cliente Guardado","clientes":clientes})
    }
)

app.delete(pathName,
    (req, res)=>{
        console.log("Recibimos peticion")
        let id = req.query.id
        console.log(id)
        let clientes = clienteService.clientesDeleteExport(id)
        res.send({"mensaje":"cliente Guardado","clientes":clientes})
    }
)

app.put(pathName,
    (req, res)=>{
        console.log("Recibimos peticion")
        console.log(req.body)
        res.send("Finaliza")
    }
)

app.patch(pathName,
    (req, res)=>{
        console.log("Recibimos peticion")
        console.log(req.body)
        res.send("Finaliza")
    }
)


app.listen(port, 
    ()=>{
        console.log("Subio el app cliente en el puerto "+port)
    }
)