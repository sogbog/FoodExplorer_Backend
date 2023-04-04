const { Router } = require("express")
const userRoutes = require("./user.routes")
const categoryRoutes = require("./category.routes")
const orderRoutes = require("./order.routes")
const dishRoutes = require("./dish.routes")
const favoriteRoutes = require("./favorites.routes")
const sessionRoutes  = require("./session.routes")

const routes = Router()

routes.use("/users", userRoutes)
routes.use("/categories" , categoryRoutes)
routes.use("/orders", orderRoutes)
routes.use("/dishes", dishRoutes)
routes.use("/favorites", favoriteRoutes)
routes.use("/session", sessionRoutes)

module.exports = routes