//const getMongo = require("./mongodb.js")
let Clientes = require("./cliente.json")

// async function getConexiones() {
//     const nameDb = ""
//     const client = await getMongo.getClientnExport(nameDb)
//     const collection = await getMongo.getCollectionExport(client, nameDb)
//     return { collection, client }
// }

const clientesGet = () =>{
    return Clientes
}

const clientesGetId = (id) =>{
    //const { collection, client } = await getConexiones()
    // var clienteEncontrado = null
    // await collection.findOne({"_id":id}).then(
        
    //     (client)=>{
    //         clienteEncontrado = client
    //     }
    
    // )
    //await getMongo.closeClientExport(client)
    //return clienteEncontrado
    var cliente = Clientes.find(
        (client)=>{
            return client._id === id
        }
    )
    console.log(cliente);
    return cliente
}

//********************* SET ************************

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



module.exports.clientesGetExport = clientesGet;
module.exports.clientesSetExport = clientesSet;
module.exports.clientesDeleteExport = clientesDelete;
module.exports.clientesGetIdExport = clientesGetId;