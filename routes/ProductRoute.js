const ProductController = require('../controllers/ProductController');
const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
    res.send('You are in the product route');
});

route.post('/addproduct', ProductController.createProduct)

route.get("/getProducts", async (req, res) => {
    try {
      
        let data = await ProductController.getProducts();
        console.log("products lists:", data);

        if (data !== "error") {
            res.send(data);
        } else {
            
            res.status(404).send(" not found");
        }
    } catch (e) {
        
        res.status(500).send('Server error');
    }
});



route.patch("/editProduct/:id", async (req, res) => {
    try {
        const id=req.params.id;
        const {product,price,quantity}= req.body;
        let data = await ProductController.editProduct(id,product,price,quantity);
       // console.log(data);
        if (data != "error") {
             res.json(`product was edited:${data}`);  
        }
        else {
            res.status(403).send("not found")
        }
    }

    catch (e) {
        res.status(500).send('server error')
    }

})




route.delete("/deleteProduct/:product", async (req, res) => {
    try {
        const product = req.params.product;
        let data = await ProductController.deleteProduct(product);
        console.log("Delete Product:", data);

        if (data !== "error") {
            res.json(data);
        } else {
            
            res.status(404).send("Product not found");
        }
    } catch (e) {
        
        res.status(500).send('Server error');
    }
});

module.exports = route;