import { Router } from 'express'
import productManager from '../classes/productManager.js'
let productManager1 = new productManager()  

const router = Router()



router.get('/', (request, response) =>{ 
    productManager1.getProducts().then((products)=>{
        response.render('realTimeProducts',{products})
    })
    

})

export default router