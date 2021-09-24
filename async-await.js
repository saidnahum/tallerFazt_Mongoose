require('./conection');

const Product = require('./models/Products');

async function main(){
   const product = new Product({
      name: 'Teclado',
      description: 'Gaming Keyboard',
      price: 150
   });
   
   const savedProduct = await product.save();
   return savedProduct;
}

main()
   .then(savedProduct => console.log(savedProduct))
   .catch(err => console.log(err))