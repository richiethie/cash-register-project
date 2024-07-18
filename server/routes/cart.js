const router = require('express').Router();
let Cart = require('../models/cart.model');

router.route('/').get((req, res) => {
    Cart.find()
        .then(items => res.json(items))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const price = Number(req.body.price);

    const newCart = new Cart({
        name,
        price,
    });
    
    newCart.save()
    .then(() => res.json('Cart item added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Cart.findById(req.params.id)
        .then(cart => res.json(cart))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/delete/:id').delete((req, res) => {
    Cart.findByIdAndDelete(req.params.id)
        .then(() => res.json('Cart item deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/update/:id').post((req, res) => {
    Cart.findById(req.params.id)
        .then(cart => {
            cart.name = req.body.name;
            cart.price = Number(req.body.price);

            cart.save()
                .then(() => res.json('Cart item updated!'))
                .catch(err=> res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
})





module.exports = router;