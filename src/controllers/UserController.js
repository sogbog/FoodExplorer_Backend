const UserRepository = require("../repositories/UserRepository")
const UserServices = require("../services/UserServices")

class UserController{
    async create(request, response){
        const {name, email, password} = request.body

        const userRepository = new UserRepository()
        const userServices = new UserServices(userRepository)

        const created = await userServices.create({name, email, password})

        return response.status(201).json(created)
    }
}

module.exports = UserController