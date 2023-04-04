const AppError = require("../utils/AppError")
const { hash } = require("bcryptjs")

class UserServices{
    constructor(userRepository){
        this.userRepository = userRepository
    }

    async create({name, email, password}){    
        if(!name || !email || !password){
            throw new AppError("Os campos nome, email e senha são obrigatórios")
        }

        const userExists = await this.userRepository.findByEmail(email)
        if(userExists) throw new AppError("Esse email ja está em uso")

        const adminExists = await this.userRepository.adminExists()
        let isAdmin
        if(!adminExists){
            isAdmin = true
        }else{
            isAdmin = false
        }
        
        const encryptedPassword = await hash(password, 8)

        const createdUser = await this.userRepository.create({name, email, password: encryptedPassword, isAdmin})

        return createdUser
    }
}

module.exports = UserServices