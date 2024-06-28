import express from 'express';
const routerAdmin = express.Router();
import restaurantController from './controllers/restaurant.controller';
import productController from './controllers/product.controller';
import makeUploader from './libs/utils/uploader';




/*  Restaurant */

routerAdmin.get("/", restaurantController.goHome)


routerAdmin
    .post("/login", restaurantController.processLogin)
    .get("/login", restaurantController.getLogin);


routerAdmin
    .get("/signup", restaurantController.getSignup)
    .post('/signup',
        makeUploader('member').single('memberImage'),
        restaurantController.processSignup)

routerAdmin.get("/logout", restaurantController.logout)


routerAdmin.get('/check-me', restaurantController.checkoutSession)

/* Product */

routerAdmin.get("/product/all",
    restaurantController.verifyRestaurant,
    productController.getAllProducts);

routerAdmin.post('/product/create',
    restaurantController.verifyRestaurant,
    makeUploader('products').array('productImages', 5),
    productController.createNewProduct);

routerAdmin.post('/product/:id',
    restaurantController.verifyRestaurant,
    productController.updateChosenProduct)

/* User */
routerAdmin.get('/user/all', restaurantController.verifyRestaurant, restaurantController.getUsers)
routerAdmin.post('/user/edit',
    restaurantController.verifyRestaurant,
    restaurantController.updateChosenUser
)

export default routerAdmin 