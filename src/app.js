import express from 'express'
import productsRouter from './routes/products.router.js'
import cartRouter from './routes/cart.router.js'
import realTimeRouter from './routes/realtime.router.js'
import handlebars from 'express-handlebars'
import {Server} from 'socket.io'

import __dirname from './utils.js'


const app = express()
const httpServer = app.listen(8080, () => console.log("Listening..."))
const io = new Server(httpServer)

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')
app.use(express.static(__dirname+'/public'))

app.use(express.json())

function midiIO (req, res){
    req.io = io
    next()

}
app.use('/api/products', midiIO, productsRouter)
app.use('/api/carts', cartRouter)
app.use('/api/realtimeproducts', realTimeRouter)


//app.use('/api/pets', petsRouter)

//app.listen(8080)