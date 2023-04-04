const knex = require("../database/knex")

class FavoriteRepository{
    async findByDish({user_id, dish_id}){
        const dish = await knex("favorites").where({user_id}).andWhere({dish_id}).first()

        return dish
    }

    async findByID({user_id, id}){
        const dish = await knex("favorites").where({user_id}).andWhere({id}).first()

        return dish
    }
    
    async create({user_id, dish_id}){
        const createdFav = await knex("favorites").returning(['id', 'dish_id']).insert({user_id, dish_id})

        return createdFav
    }

    async delete({user_id, id}){
        await knex("favorites").where({user_id}).andWhere({id}).del()
    }

    async index(user_id){
        const favorites = await knex("favorites").where({user_id})

        return favorites
    }
}

module.exports = FavoriteRepository