import { Request, Response } from 'express';
import { T } from "../libs/types/common";
import Errors, { HttpCode, Message } from '../libs/Errors';
import ProductService from "../models/Product.service"
import { AdminRequest } from '../libs/types/member';
import { ProductInput } from '../libs/types/product';

const productService = new ProductService()

const productController: T = {};

/* SPA */
/* SSR */

productController.getAllProducts = async (req: Request, res: Response) => {
    try {
        console.log("getAllProducts")
        res.render('products')
    } catch (err) {
        console.log("Error, getAllProducts", err);
        if (err instanceof Errors) res.status(err.code).json(err)
        else res.status(Errors.standard.code).json(Errors.standard)


    }
};

productController.createNewProduct = async (req: AdminRequest, res: Response) => {
    try {
        console.log("createNewProduct")
        if (!req.files?.length) throw new Errors(HttpCode.INTERNAL_SERVER_ERROR, Message.CREATE_FAILED)

        const data: ProductInput = req.body;

        data.productImages = req.files?.map(ele => {
            return ele.path
        })

        await productService.createNewProduct(data)






        res.send(`<script>alert("Sucessfull creation"); window.location.replace('admin/product/all')</script>`)

    } catch (err) {
        console.log("Error, createNewProduct", err);
        const message = err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG

        res.send(`<script>alert(${message}); window.location.replace('admin/product/all')</script>`)


    }
};

productController.updateChosenProduct = async (req: Request, res: Response) => {
    try {
        console.log("updateChosenProduct")

    } catch (err) {
        console.log("Error, updateChosenProduct", err);
        if (err instanceof Errors) res.status(err.code).json(err)
        else res.status(Errors.standard.code).json(Errors.standard)


    }
};




export default productController
