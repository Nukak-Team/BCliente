//const getMongo = require("./mongodb.js")
let Clientes = require("./productos.json")

// async function getConexiones() {
//     const nameDb = ""
//     const client = await getMongo.getClientnExport(nameDb)
//     const collection = await getMongo.getCollectionExport(client, nameDb)
//     return { collection, client }
// }

const clientesGet = () =>{
    return Clientes
}

const clientesSet = (Clientes) =>{
    Clientes.push(cliente)
    return Clientes

}

const clientesDelete = (id) =>{
    console.log(Clientes)
    cliente = Clientes.filter((vuel)=>{
        return vuel.id != id
    }
    )
    console.log(cliente)
    return cliente
}

const clientesGetId = async (id) =>{
    //const { collection, client } = await getConexiones()
    // var clienteEncontrado = null
    // await collection.findOne({"_id":id}).then(
        
    //     (client)=>{
    //         clienteEncontrado = client
    //     }
    
    // )
    //await getMongo.closeClientExport(client)
    //return clienteEncontrado
    let cliente = Clientes.find(
        (client)=>(client.id === id)
    )
    return cliente
}

module.exports.clientesGetExport = clientesGet;
module.exports.clientesSetExport = clientesSet;
module.exports.clientesDeleteExport = clientesDelete;
module.exports.clientesGetIdExport = clientesGetId;