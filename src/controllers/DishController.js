const DishRepository = require("../repositories/DishRepository")
const DishServices = require("../services/DishServices")

class DishController{
    async create(request, response){
        const {name, category_id, ingredients, price, description} = request.body

        const dishRepository = new DishRepository()
        const dishServices = new DishServices(dishRepository)

        const createdDish = await dishServices.create({name, category_id, ingredients, price, description})

        return response.status(201).json(createdDish)
    }

    async delete(request, response){
        const {id} = request.params

        const dishRepository = new DishRepository()
        const dishServices = new DishServices(dishRepository)

        await dishServices.delete(id)

        return response.json()
    }

    async update(request, response){
        const {name, category_id, ingredients, price, description} = request.body
        const {id} = request.params

        console.log({id, name, category_id, ingredients, price, description})

        const dishRepository = new DishRepository()
        const dishServices = new DishServices(dishRepository)

        const updated = await dishServices.update({id, name, category_id, ingredients, price, description})

        return response.json(updated)
    }
    
    async show(request, response){
        const {id} = request.params

        const dishRepository = new DishRepository()
        const dishServices = new DishServices(dishRepository)

        const dish = await dishServices.show(id)

        return response.json(dish)
    }

    async index(request, response){
        const {search} = request.query

        const dishRepository = new DishRepository()
        const dishServices = new DishServices(dishRepository)

        const dishes = await dishServices.index(search)

        return response.json(dishes)
    }
}

module.exports = DishController