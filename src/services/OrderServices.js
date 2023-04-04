const AppError = require("../utils/AppError")

class OrderServices{
    constructor(orderRepository){
        this.orderRepository = orderRepository
    }

    async create({user_id, details}){        
        const createdOrder = await this.orderRepository.create({user_id, details})

        return createdOrder
    }

    async update({id, status}){
        const updated = await this.orderRepository.update({id, status})

        return updated
    }

    async index({user_id, isAdmin}){
        let orders


        if(isAdmin){
            orders = await this.orderRepository.index()
        }else{
            orders = await this.orderRepository.index(user_id)
        }

        return orders
    }
}

module.exports = OrderServices