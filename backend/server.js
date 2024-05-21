import dotenv from 'dotenv'
import express from 'express'
import connectDB from './config/db.js'
import products from "./data/products.js"
import productRoutes from "./routes/productRoutes.js"
import { notFound, errorHandler } from './middleware/errorMiddleware.js '

dotenv.config()
connectDB()

const port = process.env.PORT || 5001
const app = express()

app.get('/', (req, res) => {
    res.send('API IS RUNNING')
})

app.use('/api/products', productRoutes)

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id)
    res.json(product)
})

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log(`Server Is Running on port ${port}`))
