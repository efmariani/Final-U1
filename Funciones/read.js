function Read(){
    //importo BBDD
    const fs=require('fs')
    const Libros=fs.readFileSync('./Data/Data.json','utf8')
    const librosData=JSON.parse(Libros)
    //Armo lista con Id y nombre.
    lista=[]
    for (i=0;i<librosData.length;i++){
        lista.push(`Id ${librosData[i].id} - Titulo: ${librosData[i].title}`)
    }
    return lista
}

module.exports = Read


