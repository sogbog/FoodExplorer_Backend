const UserRepository = require ("../repositories/UserRepository")
const SessionServices = require ("../services/SessionServices")

class SessionController{
    async create(request, response){
        const {email, password} = request.body

        const userRepository = new UserRepository()
        const sessionServices  = new SessionServices(userRepository)

        const user = await sessionServices.create({email, password})

        return response.json(user)
    }
}

module.exports =  SessionController