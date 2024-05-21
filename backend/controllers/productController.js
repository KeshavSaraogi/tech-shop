import asyncHandler from '../middleware/asyncHandler.js'

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  res.json(products)
});

const getProductsById = asycHandler(async(req, res) => {
    const products = await Product.findById(req.params.id)
    
    if (product) {
        return res.json(product)
    } else {
        res.status(404)
        throw new Error('Resource Not Found')
    }
})

export { getProducts, getProductsById }