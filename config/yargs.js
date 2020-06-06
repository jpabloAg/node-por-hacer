const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'//descripcion del flack/opcion del comando
}

const completado = {
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea',
    type: 'boolean'
}

const argv = require('yargs')
            .command('crear', 'Crear nueva tarea por hacer', { descripcion })// gracias a emsc6 tenemos descripcion:descripcion
            .command('actualizar', 'Actualiza el estado de completado de una tarea', { descripcion, completado })
            .command('listar', 'Muestra todas las tareas', { completado })
            .command('borrar', 'Borra una tarea', { descripcion })
            .help()
            .argv;

module.exports = {
    argv
};