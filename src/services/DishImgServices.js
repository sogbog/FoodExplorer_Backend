const AppError = require("../utils/AppError")
const DiskStorage = require("../providers/DiskStorage")

class DishImgServices{
    constructor(dishRepository){
        this.dishRepository = dishRepository
    }

    async update({id, imgFilename}){
        const diskStorage = new DiskStorage()
        
        const dish = await this.dishRepository.findByID(id)

        if(!dish) throw new AppError("Esse prato não existe!")

        if(dish.avatar) await diskStorage.deleteFile(dish.avatar)

        const filename = await diskStorage.saveFile(imgFilename)
        const avatar = filename

        const updatedDish = await this.dishRepository.updateImg({avatar, id})

        return updatedDish
    }
}

module.exports = DishImgServices