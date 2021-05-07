# Compiladores
Grupo:
  Forsiniti Federico
  Signorelli Luciano
  Scaglia Jonatan
  
  Proyecto:
    Proyecto desarrollado en las siguientes tecnologias.
      Framework: 
        NodeJS
      DevDependencies: 
        "@types/chai": "^4.2.17",
        "@types/mocha": "^8.2.2",
        "@types/node": "^15.0.1",
        "chai": "^4.3.4",
        "nodemon": "^2.0.7",
        "rimraf": "^3.0.2",
        "ts-node": "^9.1.1",
        "typescript": "^4.2.4"
       Dependencies
        "mocha": "^8.3.2",
        "moment": "^2.29.1",
        "nyc": "^15.1.0"
        
Pasos para su instalación y ejecución.

  1) Instalar dependencias
    1.1) Correr el siguiente comando -  "npm install" - en la ruta raiz del proyecto.
  2) Correr la aplicacion
    2.1) Correr el siguiente comando - "npm run start:dev"
    2.2) El comando anteriormente mencionado corre un nodemon que ejecuta la aplicacion y la mantiene abierta.
  3) Desde el archivo index.js se deje de ejemplo una situacion de entrada y salida de vehiculo de ejemplo.

Proyecto Test.

Dentro del arbol de estructura ("src") se creo la carpeta Test. Esta carpeta contiene un arbol de estructura identico al arbol de estructura del proyecto productivo.
Con los complementes de Mocha, Chai y NYC se hicieron test unitarios de toda la funcionalidad de la aplicacion.
Para ejecutar los test unitarios es necesario correr desde la raiz del proyecto el script - "npm run test"- o "npm run test-nyc" en caso de querer generar una carpeta coverage con un proyecto HTML para ver en detalle los archivos testeados y la covertura de testing en el proyecto. 

