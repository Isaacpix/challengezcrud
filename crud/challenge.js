//       CRUD = create, read, update and delete



const deleteClient = (index) => {
    const dbClient = readClient()
    dbClient.splice (index, 1)
    setLocalStorage (dbClient)

}

const updateClient = (index, client) => {
    const dbClient = readClient()
    dbClient [index] = client
    setLocalStorage (dbClient)

}

const readClient = () => getLocalStorage()

const createClient = (client) => {
    const dbClient = getLocalStorage()
    dbClient.push (client)
    setLocalStorage (dbClient)
}

