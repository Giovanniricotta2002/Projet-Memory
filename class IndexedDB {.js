class IndexedDB {
  constructor(dbName, dbVersion, stores) {
    this.db;
    this.dbName = dbName;
    this.dbVersion = dbVersion;
    this.stores = stores;
  }

  openDB(callback = (() => { })) {

    let request = window.indexedDB.open(this.dbName, this.dbVersion);
    request.onupgradeneeded = function () {
      this.db = request.result;
      if (!this.db.objectStoreNames.contains(NameObj)) {
        this.stores = this.db.createObjectStore(NameObj, { keyPath: 'id' });
      }
    };
  }





  upsert(storeName, data, callback = (() => { })) {
    if (this.db && data) {
      let transaction = this.db.transaction([storeName], IDBTransaction.READ_WRITE);
      transaction.onabort = te => callback(te.target.error);
      transaction.onerror = te => callback(te.target.error);

      let request = transaction.objectStore(storeName).put(data);
      request.onerror = e => callback(e.target.error);
      request.onsuccess = e => callback(e.target.result);
    }
  }

  get(storeName, key, callback = (() => { })) {
    if (this.db && key) {
      let request = this.db.transaction([storeName]).objectStore().get(key)
      request.onerror = e => callback(e.target.error);
      request.onsuccess = e => callback(e.target.result);
    }
  }

  getAll(storeName, callback = (() => { })) {
    if (this.db) {
      let request = this.db.transaction(storeName).objectStore(storeName).openCursor(null, IDBCursor.NEXT);
      let results = [];
      request.onsuccess = e => {
        let cursor = e.target.result;
        if (cursor) {
          console.log("Key:" + cursor.key + " Value:" + cursor.value);
          results.push({ [cursor.key]: cursor.value });
          cursor.continue();
        } else {
          callback(results);
        }
      };
      request.onerror = e => callback(e.target.error);
    }
  }


}