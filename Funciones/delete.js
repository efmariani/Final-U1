
function Delete(id){
    const fs=require('fs')
    const Libros=fs.readFileSync('./Data/Data.json','utf8')
    const librosData=JSON.parse(Libros)
    id=parseInt(id)



    ids=[]
    for (i=0;i<librosData.length;i++){
        ids.push(librosData[i].id)
    }

    if (ids.includes(id)==false){
         
        return 'Id de libro no encontrado'
    }

    librosData.splice(ids.indexOf(id),1)

    let librosDataParseada=JSON.stringify(librosData,null,2)
    fs.writeFileSync('./Data/Data.json',librosDataParseada)

    return 'Libro eliminado correctamente'
}

//Delete(5)
module.exports=Delete






