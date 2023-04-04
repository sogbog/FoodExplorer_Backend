const OrderRepository = require("../repositories/OrderRepository")
const OrderServices = require("../services/OrderServices")

class OrderController{
    async create(request, response){
        const user_id = request.user.id
        const {details} = request.body

        const orderRepository = new OrderRepository()
        const orderServices = new OrderServices(orderRepository)

        const createdOrder = await orderServices.create({user_id, details})

        return response.status(201).json(createdOrder)
    }

    async update(request, response){
        const {id, status} = request.body

        const orderRepository = new OrderRepository()
        const orderServices = new OrderServices(orderRepository)

        const updated = await orderServices.update({id, status})

        return response.json(updated)
    }

    async index(request, response){
        const {id: user_id, isAdmin} = request.user

        const orderRepository = new OrderRepository()
        const orderServices = new OrderServices(orderRepository)

        const orders = await orderServices.index({user_id, isAdmin})

        return response.json(orders)
    }
}

module.exports = OrderController