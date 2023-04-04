const DishRepository = require("../repositories/DishRepository")
const DishImgServices = require("../services/DishImgServices")

class DishImgController{
    async update(request, response){
        const {id} = request.params
        const imgFilename = request.file.filename

        const dishRepository = new DishRepository()
        const dishImgServices = new DishImgServices(dishRepository)

        const updatedDish = await dishImgServices.update({id, imgFilename})

        response.json(updatedDish)
    }
}

module.exports  = DishImgController