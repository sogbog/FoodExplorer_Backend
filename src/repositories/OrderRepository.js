const knex = require("../database/knex")

class OrderServices{
    async create({user_id, details}){      
        const status = "Pendente"
        
        const createdOrder = await knex("orders").insert({user_id, status, details})

        return createdOrder
    }

    async update({id, status}){
        const updated = await knex("orders").where({id}).first().update({status})

        return updated
    }

    async index(user_id){        
        let orders
        
        if(user_id){
            orders = await knex("orders").where({user_id})
        }else{
            orders = await knex("orders")
        }
        
        return orders
    }
}

module.exports = OrderServices