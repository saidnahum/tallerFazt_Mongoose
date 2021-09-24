require('../conection');

const Product = require('../models/Products');

const createProducts = async () => {

   const laptopone = new Product({
      name: 'Laptop HP',
      description: 'Pavilion 15'
   });

   await laptopone.save()

   const laptoptwo = new Product({
      name: 'Toshiba',
      description: 'Trhibe'
   });

   await laptoptwo.save()
};

createProducts();