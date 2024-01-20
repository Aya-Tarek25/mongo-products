const Product = require("../models/Product");

const createProduct = async (req,res) => {
    console.log(req.body);

    const {id, product, price, quantity } =req.body;
    let data = await Product.create({id, product, price, quantity});
    if(data){
        res.json(data);
    }
    res.status(400).json({message:"error"})
    }
    




const getProducts = async () => {
    try {
        let data = await Product.find({});
        if (data) {
           return (data)
        }
        else {
            console.log(" no products  Found");
        }
    }
    catch (e) {
        console.log(e);

    }

}

const editProduct=async (id,_product,_price,_quantity) => {
    try {
        
        let data = await Product.updateOne({id: id },{product: _product,price:_price,quantity:_quantity});
      
        if (data) {
            return (data);
        }else{
            console.log("error with editing");
        }
    }
    catch (e) {
        console.log("error from connecting with editing");
    }

}

const deleteProduct =async (_product) => {
    try {
        let data = await Product.deleteOne({product:_product});
        
        if (data) {
           return ("Product deleted");
        }
    }
    catch (e) {
        console.log(e);
    }

}

module.exports = { createProduct,getProducts,deleteProduct,editProduct};