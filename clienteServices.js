const getMongo = require("./mongodb.js")

async function getConexiones() {
    const nameDB = "FerreteriaNukak"
    const client = await getMongo.getClientExport(nameDB)
    const collection = await getMongo.getCollectionExport(client, nameDB)
    return { collection, client }
}

const clientesGet = () =>{
    return Clientes
}

const clientesGetId = async (id) =>{
    const { collection, client } = await getConexiones()
    var clienteEncontrado = null
    await collection.findOne({"_id":id}).then(
        (Clientes)=>{
            return clienteEncontrado = Clientes
        }
    )
    await getMongo.closeClientExport(client)
    return clienteEncontrado
}

//********************* SET ************************

const clientesSet = (cliente) =>{
    Clientes.push(cliente)
    return Clientes

}

//********************* DELETE ************************

const clientesDelete = (id) =>{
    cliente = Clientes.filter((carrito)=>{
        return carrito.id != id
    }
    )
    console.log(cliente)
    return cliente
}



module.exports.clientesGetExport = clientesGet;
module.exports.clientesSetExport = clientesSet;
module.exports.clientesDeleteExport = clientesDelete;
module.exports.clientesGetIdExport = clientesGetId;