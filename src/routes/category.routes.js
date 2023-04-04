const { Router } = require("express")
const CategoryController = require("../controllers/CategoryController")
const isAuthenticated = require("../middlewares/isAuthenticated")

const categoryRoutes = Router()
const categoryController = new CategoryController()

categoryRoutes.post("/",  isAuthenticated, categoryController.create)
categoryRoutes.delete("/:id",  isAuthenticated, categoryController.delete)
categoryRoutes.get("/", categoryController.index)

module.exports = categoryRoutes