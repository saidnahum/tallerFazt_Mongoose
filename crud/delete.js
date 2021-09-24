require('../conection');

const Product = require('../models/Products');


const deleteProduct = async () => {
   // Eliminar varios documentos que coincidan con un dato
   //const result = await Product.deleteMany({name: 'Teclado'});

   // Busca todos los datos que coincidan con el parámetro y elimina 1
   //const result = await Product.deleteOne({name: 'Laptop'});

   // Busca soólo un documento que coincida con el dato y lo elimina
   //const result = await Product.findOneAndDelete({name: 'Toshiba'});

   // Busca el documento por ID y lo elimina
   const result = await Product.findByIdAndDelete('614e22f54d019ae566b1857a');

   console.log(result);
}

deleteProduct();