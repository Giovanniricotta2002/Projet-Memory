let indNameBd = "Porject-Memory"
let db = ''
let store
let NameObj = "pm"
const objRqt = window.indexedDB.open(indNameBd, 1) 
const user = { id:1, name: "toto"} 

objRqt.onupgradeneeded = function(){ 
    db = objRqt.result; 
    if (!db.objectStoreNames.contains(NameObj)){ 
        store = db.createObjectStore(NameObj, {keyPath: 'id'}); 
    } 
}; 

objRqt.onsuccess = function() {
    db = objRqt.result; 
    let transaction = db.transaction(NameObj, 'readwrite'); 
    
    transaction.oncomplete = function(){ 
        console.log('Transaction terminée'); 
    }; 

    store = transaction.objectStore(NameObj)
   let add = store.put(user); 
    add.onsuccess = function(){ 
        console.log('Utilisateur ajouté avec la clef ' + add.result); 
    };
  
}

let transaction = db.transaction(NameObj, 'readwrite'); 
    
    transaction.oncomplete = function(){ 
        console.log('Transaction terminée'); 
    }; 

    store = transaction.objectStore(NameObj)
  let getv = store.get(1);
  getv.onsuccess = (event => { console.log(getv.result) })