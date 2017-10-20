var gulp = require('gulp');
var stylus = require('gulp-stylus');

gulp.task('default', function() {
  console.log('Hola este es mi primer task con gulp');
})

gulp.task('style', function(){  /*Registramos una nueva tarea con gulp con la siguente funcion gul.task(''
 que es la funcion que utilizamos para registrar nuevs tareas en gulp.
 Registramos nuestra tarea con el nobre "style" y a continuacion pasamos una funcion anonima.)*/

  gulp.src('./src/css/*.styl') /*La función que encontramos dentro de la función anónima, osea, gulp.src(‘’),
  es la que realiza la búsqueda del archivo o archivos que vamos a procesar. */

  /*A continuación encontramos la función .pipe(), dentro de esta función. Ejecutamos una función que va a ser la encargada
    de procesar o convertir nuestro archivo o archivos según lo que hemos asignado en el gulp.src(‘’).
    La función que se ejecuta en este caso es stylus(), pero te preguntarás de dónde proviene esta función. Pues bien,
    la definimos en un lugar previo, antes de definir nuestras tareas*/
  .pipe(stylus()) /**/
  .pipe(gulp.dest('./build/css'))
})
