import Cart from '../models/cart.model'; // Adjust the import based on your file structure

export default async function handler(req, res) {
    const { method } = req;
    const { id } = req.query; // Get the ID from query for specific item routes

    switch (method) {
        case 'GET':
            if (id) {
                // Fetch a single cart item by ID
                try {
                    const cartItem = await Cart.findById(id);
                    if (!cartItem) {
                        return res.status(404).json({ error: 'Cart item not found.' });
                    }
                    res.status(200).json(cartItem);
                } catch (err) {
                    res.status(400).json({ error: 'Error fetching cart item: ' + err });
                }
            } else {
                // Fetch all cart items
                try {
                    const items = await Cart.find();
                    res.status(200).json(items);
                } catch (err) {
                    res.status(400).json({ error: 'Error fetching cart items: ' + err });
                }
            }
            break;

        case 'POST':
            // Add a new cart item
            try {
                const { name, price } = req.body;
                const newCartItem = new Cart({ name, price });
                await newCartItem.save();
                res.status(201).json({ message: 'Cart item added!' });
            } catch (err) {
                res.status(400).json({ error: 'Error adding cart item: ' + err });
            }
            break;

        case 'DELETE':
            // Delete a cart item by ID
            try {
                const cartItem = await Cart.findByIdAndDelete(id);
                if (!cartItem) {
                    return res.status(404).json({ error: 'Cart item not found.' });
                }
                res.status(200).json({ message: 'Cart item deleted.' });
            } catch (err) {
                res.status(400).json({ error: 'Error deleting cart item: ' + err });
            }
            break;

        case 'PUT':
            // Update a cart item by ID
            try {
                const cartItem = await Cart.findById(id);
                if (!cartItem) {
                    return res.status(404).json({ error: 'Cart item not found.' });
                }

                const { name, price } = req.body;
                cartItem.name = name;
                cartItem.price = price;

                await cartItem.save();
                res.status(200).json({ message: 'Cart item updated!' });
            } catch (err) {
                res.status(400).json({ error: 'Error updating cart item: ' + err });
            }
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST', 'DELETE', 'PUT']);
            res.status(405).end(`Method ${method} Not Allowed`);
            break;
    }
}
