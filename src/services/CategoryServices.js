const AppError = require("../utils/AppError")

class CategoryServices{
    constructor(categoryRepository, dishRepository){
        this.categoryRepository = categoryRepository
        this.dishRepository = dishRepository
    }

    async create(name){
        const categoryExists = await this.categoryRepository.findByName(name)

        if(categoryExists) throw new AppError("Essa categoria já existe")

        const createdCategory = await this.categoryRepository.create(name)

        return createdCategory
    }

    async delete(id){
        const categoryExists = await this.categoryRepository.findByID(id)

        if(!categoryExists) throw new AppError("Essa categoria não existe")

        await this.categoryRepository.delete(id)

        return
    }

    async index(){
        const categories = await this.categoryRepository.index()

        let completeCategories = []
        
        await Promise.all(categories.map(async (category) => {
            
            const dishes = await this.dishRepository.findByCategory(category.id)
            category.dishes = dishes

            completeCategories.push(category)
        }))

        return completeCategories
    }
}

module.exports = CategoryServices