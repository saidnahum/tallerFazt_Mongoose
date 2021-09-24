require('./conection');

const User = require('./models/User');

async function createUsers(){
   const userOne = new User({
      username: 'nahum',
      password: '123123'
   })

   await userOne.save()

   const userTwo = new User({
      username: 'juan',
      password: 'securepassword'
   })

   await userTwo.save()
}

createUsers();