// Dependency invertion principle

class Fetch {
    request() {
        // return fetch(url).then(r => r.json())
        return Promise.resolve('Data from fetch')
    }
}

class FetchClient {
    constructor() {
        this.fetch = new Fetch()
    }

    clientGet() {
        return this.fetch.request('vk.com')
    }
}



class LocalStorage {
    get() {
        // return localStorage.getItem('key')
        const localStorageItem = 'item from local storage'
        return localStorageItem
    }
}

class LocalStorageClient {
    constructor() {
        this.localStorage = new LocalStorage()
    }

    clientGet(key) {
        return this.localStorage.get(key)
    }
}

class Database {
    constructor(client) {
        this.client = client
    }

    getData() {
        return this.client.clientGet()
    }
}

const db = new Database(new LocalStorageClient())
console.log(db.getData());