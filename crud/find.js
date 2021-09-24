require('../conection');

const Product = require('../models/Products');

async function main(){
   const products = await Product.find({name: 'Teclado'});
   console.log(products);
}

main();