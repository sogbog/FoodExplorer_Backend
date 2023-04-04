const AppError = require("../utils/AppError")

class DishServices{
    constructor(dishRepository){
        this.dishRepository = dishRepository
    }

    async create({name, category_id, ingredients, price, description}){
        if(!name || !ingredients || !price) throw new AppError("Os campos nome, ingredientes e preço são obrigatórios!")
        
        const dishExists = await this.dishRepository.findByName(name)

        if(dishExists) throw new AppError("Esse prato já existe")

        const createdDish = await this.dishRepository.create({name, category_id, ingredients, price, description})

        return createdDish
    }

    async update({id, name, category_id, ingredients, price, description}){
        const dishExists = await this.dishRepository.findByName(name)

        if(dishExists && dishExists.id != id) throw new AppError("Esse prato já existe")

        const updated = await this.dishRepository.update({id, name, category_id, ingredients, price, description})

        return updated
    }
    
    async delete(id){
        await this.dishRepository.delete(id)        
    }

    async show(id){
        const dish = this.dishRepository.findByID(id)

        return dish
    }

    async index(search){
        const dishes = await this.dishRepository.index(search)

        return dishes
    }
}

module.exports  = DishServices