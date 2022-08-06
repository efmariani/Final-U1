

function Edit(id,title='Desconocido',author='Desconocido',genere='Desconocido',year=null,cost=null,price=null){
    //Importo BBDD
    const fs=require('fs')
    const Libros=fs.readFileSync('./Data/Data.json','utf8')
    const librosData=JSON.parse(Libros)
    id=parseInt(id)

    //Verifico datos ingresados
    year=parseInt(year)
    if (year==NaN){
        year=null
    }
    cost=parseFloat(cost)
    if (cost==NaN){
        cost=null
    }
    price=parseFloat(price)
    if (price==NaN){
        price=null
    }

    //Extraigo lista de id's 
    ids=[]
    for (i=0;i<librosData.length;i++){
        ids.push(librosData[i].id)
    }

    //Verifico que el id ingresado exista en la lista y obtengo su posicion.
    if (ids.includes(id)==false){
        return 'Id invalido'
    }
    let ID=ids.indexOf(id)

    //genero el articulo con los cambios
    let nuevoLibro = {
        "id":id,
        "title":title,
        "author":author,
        "genre":genere,
        "year":year,
        "cost":cost,
        "price":price
    }
    
    //ingreso el articulo modificado.
    librosData[ID]=nuevoLibro

    let librosDataParseada=JSON.stringify(librosData,null,2)
    fs.writeFileSync('./Data/Data.json',librosDataParseada)

    return 'Libro modificado correctamente'

}

//edit(3,'catalina','facundo','niños',2019,10,20)
module.exports=Edit




