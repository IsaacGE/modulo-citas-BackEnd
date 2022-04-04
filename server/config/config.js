//Configuracion Predeterminada
const { verificaToken } = require("../middlewares/autenticacion");

//COnfiguracion de puerto
process.env.PORT = process.env.PORT || 3000;
// Declaracion de entorno, funcion que nos dara en que ambiente estamos
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//Conexion a la base de datios 
process.env.URLDB = process.env.URLDB || 'mongodb+srv://isaacGE:5b5h1no9zXvuNBxQ@cluster0.ygjl4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
process.log = (process.env.NODE_ENV === 'dev');
process.env.DB_CONEXION = process.env.DB_CONEXION || false;

// Vencimiento del Token
process.env.CADUCIDAD_TOKEN = process.env.CADUCIDAD_TOKEN || '12h';

// SEED de Autenticación
process.env.SEED = process.env.SEED || 'Frima-super-secreta';

// URL del servidor del FrontEnd
process.env.URL_FRONT = process.env.URL_FRONT || 'http://localhost:4200/#/';

// Credenciales del correo electrónico.
process.env.STRCORREO = process.env.STRCORREO || 'notificaciones.desarrollo@utags.edu.mx';
process.env.STRPASSWORD = process.env.STRPASSWORD || `!9,G\\qEqU8p==>jE`;

process.middlewares = [verificaToken];