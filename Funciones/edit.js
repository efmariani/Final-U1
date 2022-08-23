// Es buena práctica que los módulos y librerías se carguen en el top level del archivo js. Es decir acá en fila:
// const fs = require('fs')
// const otraLibreriaOModulo = require('otraLibreriaOModulo')

function Edit(id,title='Desconocido',author='Desconocido',genere='Desconocido',year=null,cost=null,price=null){ // Esta validación está bien, pero recordá que si no le pasás un argumento al parámetro de la función, este no tiene valor de todas maneras. Y podés usar eso para hacer la validación.
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
    // Acá esto está bien, pero podés usar un método de array de js para hacerlo más fácil

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
        "price":price,
    }
    // Los nombres de propiedades no hace falta que estén en string, lo podés envolver en string cuando necesitás que tengan un espacio.
    // Ex: "price plus": price
    //
    // Después si el nombre de propiedad es lo mismo que el nombre del valor, podés hacer esto:
    //     let nuevoLibro = {
    //      id,
    //      title,
    //      author,
    //      genre,
    //      year,
    //      cost,
    //      price,
    //    {
    
    //ingreso el articulo modificado.
    librosData[ID]=nuevoLibro

    let librosDataParseada=JSON.stringify(librosData,null,2)
    fs.writeFileSync('./Data/Data.json',librosDataParseada)

    return 'Libro modificado correctamente'

}

//edit(3,'catalina','facundo','niños',2019,10,20)
module.exports=Edit




