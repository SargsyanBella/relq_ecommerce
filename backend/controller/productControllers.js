const Product = require("../models/Product");

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    }catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});

    }
}

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.json(product);
    }catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});

    }
};

const createProduct = async (req, res) => {
    try {
        const product = new Product({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            countInStock: req.body.countInStock,
            imageUrl: req.body.imageUrl,

        }

        )
        await product.save()
        res.json(product);
    }catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});

    }
};

const updateProduct = async (req, res) => {
    try {
        const id = req.params.id
        const updatedProduct = {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            countInStock: req.body.countInStock,
            imageUrl: req.body.imageUrl,

        }

        const product = await Product.findOneAndUpdate({_id:id},updatedProduct)
        await product.save()
        res.json(`product with id ${id} updated`);
       
    }catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});

    }
};

const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id
        

        const deletedProduct = await Product.findOneAndDelete({_id:id})
       
        res.json(`product with id ${id} deleted`);
    }catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});

    }
};


module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};



