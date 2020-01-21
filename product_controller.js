module.exports = {
    create: (req, res) => {
        const dbInstance = req.app.get('db');
        const {name, desc, price, image_url} = req.body;
        dbInstance.create_product([name, desc, price, image_url]).then(
                () => res.sendStatus(200)
            ).catch(err => {
                res.status(500).send({ errorMessage: " Oops! Something went wrong" });
                console.log(err)
            })
    },

    getOne: (req, res) => {
        const dbInstance = req.app.get('db');
        const id = req.params.id;
        dbInstance.read_product([id]).then(
            product => res.status(200).send(product)
        ).catch( err => {
            res.status(500).send({errorMessage: "Oops! something went wrong retrieving the product from db"});
            console.log(err)
        })

    },

    getAll: (req, res) => {
        const dbInstance = req.app.get('db')
        dbInstance.read_products().then(
            products => res.status(200).send(products)
        ).catch( err => {
            res.status(500).send({errorMessage: "Oops! something went wrong retrieving all products from db"});
            console.log(err)
        })
    },

    update: (req, res) => {
        const dbInstance = req.app.get('db');
        const id = req.params.id;
        const desc = req.query;
        dbInstance.update_product([id, desc]).then(
            () => res.sendStatus(200)
        ).catch( err => {
            res.status(500).send({errorMessage: "Oops! something went wrong updating product"});
           console.log(err)
      })
    },

    delete: (req, res) => {
        const dbInstance = req.app.get('db');
        const id = req.params.id;
        dbInstance.delete_product([id]).then(
            () => res.sendStatus(200)
        ).catch( err => {
            res.status(500).send({errorMessage: "Oops! something went wrong deleting product"});
            console.log(err);
        })
    },
};