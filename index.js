require('./conection');

// Importando el modelo product basado en un Schema
const Product = require('./models/Products');

// Definiendo/Creando el producto
const product = new Product({
   name: 'Laptop',
   description: 'Lenovo thinkpad',
   price: 1300.99
});

// Guardando el producto
product.save((err, document) => {
   if(err){
      console.log(err);
   } else {
      console.log(document);
   }
})

console.log(product);
