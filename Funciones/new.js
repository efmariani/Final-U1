function New(title,author='Desconocido',genere='Desconocido',year=null,cost=null,price=null){
    //Importo BBDD
    const fs=require('fs')
    const Libros=fs.readFileSync('./Data/Data.json','utf8')
    const librosData=JSON.parse(Libros)

    //verifico datos ingresados
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

    //Chequeo que sea un string y exista un titulo para el libro caso contrario, termino.
    if (typeof(title)!='string'){
        return 'Error titulo no valido'
        }

    //Con titulo asgurado, le genero un id.
    //Primero extraigo una lista de id´s.
    ids=[]
    for (i=0;i<librosData.length;i++){
        ids.push(librosData[i].id)
    }
    //genero un id que no exista
    id=1
    while (ids.includes(id)) {
        id++    
    }

    //genero el nuevo articulo
    let nuevoLibro = {
        "id":id,
        "title":title,
        "author":author,
        "genre":genere,
        "year":year,
        "cost":cost,
        "price":price
    }
    
    //lo ingreso a la BBDD
    librosData.push(nuevoLibro)
    let librosDataParseada=JSON.stringify(librosData,null,2)
    fs.writeFileSync('./Data/Data.json',librosDataParseada)

    return 'Libro agregado correctamente'


}

module.exports=New
//New('hola')
//New('Yes','yo','xxx',1985,52.3,80)
