// Importar mongoose
const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/mywebstore';
const db = mongoose.connection;

// Conexion a MongoDB
mongoose.connect(uri, {
   // Configuraciones de la conexion
   useNewUrlParser: true,
   //useUnifiedTopolofy: true
}).catch(err => console.log(err));

// Cuando la conexion esté abierta mostrar donde se conecto
db.once('open', _ => {
   console.log("Database is conected to", uri);
});

// Cuando se tenga error en la conexion, mostrarlo
db.on('error', err => {
   console.log(err);
})
