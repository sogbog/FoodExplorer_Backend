const { Router } = require("express")
const OrderController = require("../controllers/OrderController")
const isAuthenticated = require("../middlewares/isAuthenticated")

const orderRoutes = Router()
const orderController = new OrderController()

orderRoutes.post("/",  isAuthenticated, orderController.create)
orderRoutes.put("/",   isAuthenticated, orderController.update)
orderRoutes.get("/",  isAuthenticated, orderController.index)

module.exports = orderRoutes