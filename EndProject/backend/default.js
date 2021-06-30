import { products } from "./constants/products.js";
import products from "./model/productSchema.js";

const DefaultData = async () => {
    try{
        await product.deleteMany({});
       await product.insertMany(products);
       console.log('Data imported successefully');
    }catch(error){
        console.log('Error: ',error.message);
    }
}

 export default DefaultData;