const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];

switch( comando ){

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    
    case 'listar':
        console.log(argv.completado);
        let listado = porHacer.getListado();
        if ( argv.completado != undefined ) {
            let tareas = listado.filter(tarea => tarea.completado == argv.completado);
            for(let tarea of tareas){
                console.log('=======Por Hacer======'.green);
                console.log(tarea.descripcion);
                console.log('Estado: ', tarea.completado);
                console.log('======================\n'.green);   
            }
        }else{
            for(let tarea of listado){
                console.log('=======Por Hacer======'.green);
                console.log(tarea.descripcion);
                console.log('Estado: ', tarea.completado);
                console.log('======================\n'.green);   
            }
        }
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
    break;

    default:
        console.log('Comando no es reconocido');
    break;
}