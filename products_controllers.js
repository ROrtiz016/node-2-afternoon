module.exports = {
  create: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const {name, description, price, img_url} = req.body
    dbInstance.create_product([name, description, price, img_url]).then(() => res.sendStatus(200))
    .catch(err => {
      res.status(500).send({errorMessage: 'Oops! something went worng'})
      console.log(err)
    })
  },

  getOne:(req, res, next) => {
    const dbInstance = req.app.get('db')
    const {params} = req
    dbInstance.read_product( params.id ).then(() => res.sendStatus(200))
    .catch( err => {
      res.status(500).send({errorMessage: 'Oops! Something went wrong'})
      console.log(err)
    })
  }, 
  
  getAll:(req, res, next) => {
    const dbInstance = req.app.get('db')
    dbInstance.read_products().then( products => res.sendStatus(200).send(products))
    .catch( err => {
      res.status(500).send({errorMessage: 'Oops! Something went wrong'})
      console.log(err)
    })
  },

  update:(req, res, next) => {
    const dbInstance = req.app.get('db')
    const {params, query} = req;
    dbInstance.update_product([params.id, query.desc]).then(() => res.sendStatus(200))
    .catch( err => {
      res.status(500).send({errorMessage: 'Oops! something went wrong'})
      console.log(err)
    })
  },

  delete:(req, res, next) => {
    const dbInstance = req.app.get('db')
    const {params} = req
    dbInstance.delete_product(params.id).then(() => res.sendStatus(200))
    .catch( err => {
      res.status(500).send({errorMessage: 'Oops something went wrong'})
      console.log(err)
    })
  }

};