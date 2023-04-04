const FavoriteRepository = require("../repositories/FavoriteRepository")
const DishRepository = require("../repositories/DishRepository")
const FavoriteServices = require("../services/FavoriteServices")


class FavoriteController{
    async create(request, response){
        const user_id = request.user.id
        const {dish_id} = request.body

        const favoriteRepository = new FavoriteRepository
        const dishRepository = new DishRepository
        const favoriteServices = new FavoriteServices(favoriteRepository, dishRepository)

        const createdFav = await favoriteServices.create({user_id, dish_id})

        return response.json(createdFav)
    }

    async delete(request, response){
        const user_id = request.user.id
        const {id} = request.params

        const favoriteRepository = new FavoriteRepository
        const favoriteServices = new FavoriteServices(favoriteRepository)

        await favoriteServices.delete({user_id, id})

        return response.json()
    }

    async index(request, response){
        const user_id = request.user.id

        const favoriteRepository = new FavoriteRepository
        const dishRepository = new DishRepository
        const favoriteServices = new FavoriteServices(favoriteRepository, dishRepository)

        const favorites = await favoriteServices.index(user_id)

        return response.json(favorites)
    }
}

module.exports = FavoriteController