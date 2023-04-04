const { json } = require("express")
const CategoryRepository = require("../repositories/CategoryRepository")
const DishRepository = require("../repositories/DishRepository")
const CategoryServices = require("../services/CategoryServices")


class CategoryController{    
    
    async create(request, response){
        const { name } = request.body

        const categoryRepository = new CategoryRepository()
        const categoryServices = new CategoryServices(categoryRepository)

        const createdCategory = await categoryServices.create(name)
        
        return response.json(createdCategory)
    }

    async delete(request, response){        
        const { id } = request.params

        const categoryRepository = new CategoryRepository()
        const categoryServices = new CategoryServices(categoryRepository)

        await categoryServices.delete(id)

        return response.json()
    }

    async index(request, response){
        const categoryRepository = new CategoryRepository()
        const dishRepository = new DishRepository()
        const categoryServices = new CategoryServices(categoryRepository, dishRepository)

        const categories = await categoryServices.index()

        return response.json(categories)
    }
}

module.exports = CategoryController