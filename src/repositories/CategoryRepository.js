const knex = require("../database/knex")

class CategoryRepository{
    async findByName(name){
        const category = await knex("categories").where({name}).first()

        return category
    }

    async findByID(id){
        const category = await knex("categories").where({id}).first()

        return category
    }
    
    async create(name){
        const createdCategory = await knex("categories").returning(['id', 'name']).insert({name})

        return createdCategory
    }

    async delete(id){
        await knex("categories").where({id}).del()

        return
    }

    async index(){
        const categories = await knex("categories")

        return categories
    }
}

module.exports = CategoryRepository