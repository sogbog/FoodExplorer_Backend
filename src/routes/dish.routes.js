const { Router, response } = require("express")
const DishController = require("../controllers/DishController")
const DishImgController = require("../controllers/DishImgController")
const isAuthenticated = require("../middlewares/isAuthenticated")
const multer = require("multer")
const uploadConfig = require("../configs/upload")

const dishRoutes = Router()
const dishController = new DishController()
const dishImgController = new DishImgController()

const upload = multer(uploadConfig.MULTER)

dishRoutes.post("/",  isAuthenticated, dishController.create)
dishRoutes.delete("/:id",  isAuthenticated, dishController.delete)
dishRoutes.put("/:id",  isAuthenticated, dishController.update)
dishRoutes.get("/:id", dishController.show)
dishRoutes.get("/", dishController.index)
dishRoutes.patch("/:id/avatar", isAuthenticated, upload.single("img"), dishImgController.update)

module.exports = dishRoutes