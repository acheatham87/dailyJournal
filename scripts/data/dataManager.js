
export const getUsers = () => {
    return fetch("http://localhost:8088/users")
    .then(response => response.json())
    .then(parsedResponse => {
        return parsedResponse;
    })
}

let journalEntries = []

export const getEntries = () => {
    return fetch('http://localhost:8088/entries?_sort=timestamp&_order=desc')
    .then(response => response.json())
    .then(parsedResponse => {
        journalEntries = parsedResponse
        return parsedResponse
    })
}

export const getSingleEntry = (entryId) => {
    return fetch(`http://localhost:8088/entries/${entryId}`)
    .then(response => response.json())
}

export const useJournalEntries = () => {
    return [...journalEntries]
}

export const createEntry = entryObj => {
    return fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(entryObj)
    })
    .then(response => response.json())
}

export const deleteEntry = entryId => {
    return fetch(`http://localhost:8088/entries/${entryId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
}

export const updateEntry = entryObj => {
    return fetch(`http://localhost:8088/entries/${entryObj.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entryObj)
    })
    .then(response => response.json())
}