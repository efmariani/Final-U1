function Read(){
    //importo BBDD
    const fs=require('fs')
    const Libros=fs.readFileSync('./Data/Data.json','utf8')
    const librosData=JSON.parse(Libros)
    //Armo lista con Id y nombre.
    lista=[]
    for (i=0;i<librosData.length;i++){
        // Ojo acá! tenés que declarar la variable "i" dentro del for loop: for (let i = 0; ...)
        // y ojo la indentación: for (let i = 0; i < librosData.length; i++) {
        lista.push(`Id ${librosData[i].id} - Titulo: ${librosData[i].title}`)
        // Está perfecto, también lo podés hacer con métodos de array! (map)
    }
    return lista
}

module.exports = Read


