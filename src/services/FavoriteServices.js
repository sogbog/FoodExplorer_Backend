const AppError = require("../utils/AppError")

class FavoriteServices{
    constructor(favoriteRepository, dishRepository){
        this.favoriteRepository = favoriteRepository
        this.dishRepository = dishRepository
    }

    async create({user_id, dish_id}){
        const favExists = await this.favoriteRepository.findByDish({user_id, dish_id})

        if(favExists) throw new AppError("Esse item já está favoritado")
        
        const [createdFav] = await this.favoriteRepository.create({user_id, dish_id})

        const dish = await this.dishRepository.findByID(createdFav.dish_id)

        createdFav.dish = dish

        return createdFav
    }

    async delete({user_id, id}){
        const favExists = await this.favoriteRepository.findByID({user_id, id})

        if(!favExists) throw new AppError("Esse item não é favoritado")
        
        await this.favoriteRepository.delete({user_id, id})
    }

    async index(user_id){
        const favorites = await this.favoriteRepository.index(user_id)

        let favoritesWithDishes = []
        
        await Promise.all(favorites.map(async (favorite) => {
            const dish = await this.dishRepository.findByID(favorite.dish_id)
            favorite.dish = dish

            favoritesWithDishes.push(favorite)
        }))

        return favoritesWithDishes
    }
}

module.exports = FavoriteServices