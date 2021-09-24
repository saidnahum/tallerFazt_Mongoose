require('../conection');

const User = require('../models/User');

async function getUser(){
   const user = await User.findOne({username: 'juan'});
   console.log(user);
}

getUser();