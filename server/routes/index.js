const router = require("express").Router();
const controller = require("../controllers");
const authentication = require("../middlewares/authentication");
const errorHandler = require("../middlewares/errorHandler");


router.get(`/`, (req, res) => {
    res.status(200).json({ message: 'halozz' })
  });

router.post('/register', controller.register)
router.post('/login', controller.login)

router.get('/products', controller.getProduct)
router.get('/products/:id', controller.getProductById)
router.get('/categories', controller.getCategories)
router.use (authentication)
router.post('/products', controller.createProduct)



router.use(errorHandler);

module.exports = router;