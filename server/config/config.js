//COnfiguracion de puerto
process.env.PORT = process.env.PORT || 3000;
// Declaracion de entorno, funcion que nos dara en que ambiente estamos
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
//Conexion a la base de datios 
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    //Son todas las funciones y procesos que tienen el amibiente del desarrollo que es local 
    urlDB = 'mongodb+srv://isaacGE:5b5h1no9zXvuNBxQ@cluster0.ygjl4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
} else { //Ambiente de produccion nube = Heroku
    urlDB = 'mongodb://localhost:27017/modulo-citas';
}

//Tenemos dos ambientes el de produccion y el de desarrollo 

//env = entorno  
process.env.URLDB = urlDB;

//Firma de JWt 
process.env.SEED = process.env.SEED || 'Frima-super-secreta';

process.env.CADUCIDAD_TOKEN = process.env.CADUCIDAD_TOKEN || '3h';