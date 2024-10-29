import Product from '../models/product.model'; // Adjust the import based on your file structure

export default async function handler(req, res) {
    const { method } = req;
    const { id } = req.query; // Get the ID from query for the GET, DELETE, and UPDATE routes

    switch (method) {
        case 'GET':
            if (id) {
                // Fetch a single product by ID
                try {
                    const product = await Product.findById(id);
                    res.status(200).json(product);
                } catch (err) {
                    res.status(400).json({ error: 'Error fetching product: ' + err });
                }
            } else {
                // Fetch all products
                try {
                    const products = await Product.find();
                    res.status(200).json(products);
                } catch (err) {
                    res.status(400).json({ error: 'Error fetching products: ' + err });
                }
            }
            break;

        case 'POST':
            // Add a new product
            try {
                const { name, price } = req.body;
                const newProduct = new Product({ name, price });
                await newProduct.save();
                res.status(201).json({ message: 'Product added!' });
            } catch (err) {
                res.status(400).json({ error: 'Error adding product: ' + err });
            }
            break;

        case 'DELETE':
            // Delete a product by ID
            try {
                await Product.findByIdAndDelete(id);
                res.status(200).json({ message: 'Product deleted.' });
            } catch (err) {
                res.status(400).json({ error: 'Error deleting product: ' + err });
            }
            break;

        case 'PUT':
            // Update a product by ID
            try {
                const product = await Product.findById(id);
                if (!product) {
                    return res.status(404).json({ error: 'Product not found.' });
                }

                const { name, price } = req.body;
                product.name = name;
                product.price = price;

                await product.save();
                res.status(200).json({ message: 'Product updated!' });
            } catch (err) {
                res.status(400).json({ error: 'Error updating product: ' + err });
            }
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST', 'DELETE', 'PUT']);
            res.status(405).end(`Method ${method} Not Allowed`);
            break;
    }
}
