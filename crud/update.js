require('../conection');

const User = require('../models/User');

const someFunction = async () => {
   // Buscar usuario
   const user = await User.findOne({username: 'nahum'});

   // Mostrar usuario
   console.log(user);

   // Alterar propiedad del usuario
   user.password = '1515%$&53',

   // Guardar usuario
   user.save();
}

const otherFunction = async () => {
   const user = await User.findOneAndUpdate({username: 'juan'}, {
      name: 'Juan Chavez Lopez'
   }, {new: true});

   console.log(user);
};

const updateUsers = async () => {
   const user = await User.update({username: 'said'},{password: 'contraseñaSegura'});

   console.log(user);
};

otherFunction();