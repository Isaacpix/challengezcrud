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

// Interação com o layout 

const clearFields = () => {
    const fields = document.querySelectorAll ('.model-field')
    fields.forEach (field => field.value = "" )
}

const saveClient = () => {
    if (isValidFields()) {
        const client = {
            nome: document.getElementById ('nome').value,
            email: document.getElementById ('email').value,
            celular: document.getElementById ('celular').value,
            cidade: document.getElementById ('cidade').value

        
        }
        createClient(client)
        closeModal()

    }
}

const createRow = (client) => {
    const newRow = document.createElement ('tr')
    newRow.innerHTML = 
         // sem HTML :)  ^
}

const updateTable = () => {
    const dbClient = readClient()
    dbClient.forEach(createRow)
}

updateTable()


// Eventos

document.getElementById ('cadastrarCliente')
    .addEventListener ('click', openModal)

document.getElementById ('modalClose')
    .addEventListener ('click', closeModal)

document.getElementById ('salvar')
    .addEventListener ('click', salveClient)