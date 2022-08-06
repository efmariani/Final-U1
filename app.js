const Read=require('./Funciones/read')
const Delete=require('./Funciones/delete.js')
const New=require('./Funciones/new')
const Edit=require('./Funciones/edit')
const { assert } = require('console')


switch (process.argv[2]){
    case 'Read':
        console.log('Lista completa de titulos en BBDD')
        console.log(Read())
        break
    
    case 'New':
        if (typeof(process.argv[3])!='string'){
            console.log('New requiere al menos un titulo de libro')
            console.log('Su estructura es: \n New Titulo Autor Genero Año Costo Precio')
            break
        }
        console.log(New(process.argv[3],process.argv[4],process.argv[5],process.argv[6],process.argv[7],process.argv[8]))
        break

    case 'Edit':
        console.log(Edit(process.argv[3],process.argv[4],process.argv[5],process.argv[6],process.argv[7],process.argv[8],process.argv[9]))
        break

    case 'Delete':
        console.log(Delete(process.argv[3]))    
        break

    default:
        console.log('Por favor coloque una funcion valida(Read,New,Edit,Delete)')

}






