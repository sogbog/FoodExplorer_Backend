const { Router } = require("express")
const FavoriteController = require("../controllers/FavoriteController")
const isAuthenticated = require("../middlewares/isAuthenticated")

const favoriteRoutes = Router()
const favoriteController = new FavoriteController()

favoriteRoutes.post("/",  isAuthenticated, favoriteController.create)
favoriteRoutes.delete("/:id",  isAuthenticated, favoriteController.delete)
favoriteRoutes.get("/",  isAuthenticated, favoriteController.index)


module.exports = favoriteRoutes