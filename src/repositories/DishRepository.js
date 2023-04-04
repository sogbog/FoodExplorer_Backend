const knex = require("../database/knex")

class DishRepository{
    async findByName(name){
        const dish = await knex("dishes").where({name}).first()

        return dish
    }
    
    async findByID(id){
        const dish = await knex("dishes").where({id}).first()

        return dish
    }

    async findByCategory(category_id){
        const dishes = await knex("dishes").where({category_id})

        return dishes
    }
    
    async create({name, category_id, ingredients, price, description}){
        const createdDish = await knex("dishes").insert({name, category_id, ingredients, price, description})

        return createdDish
    }

    async update({id, name, category_id, ingredients, price, description}){
        const updated = await knex("dishes").where({id}).update({name, category_id, ingredients, price, description})

        return updated
    }

    async delete(id){
        await knex("dishes").where({id}).del()
    }

    async index(search){
        const dishes = await knex("dishes").whereLike("name", `%${search}%`).orWhereLike("ingredients", `%${search}%`).orderBy("name")

        return dishes
    }

    async updateImg({avatar, id}){
        const updated = await knex("dishes").where({id}).update({avatar})

        return updated
    }
}

module.exports = DishRepository