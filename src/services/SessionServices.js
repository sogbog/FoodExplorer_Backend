const AppError = require("../utils/AppError")
const { compare } = require("bcryptjs")
const authConfig = require("../configs/auth")
const { sign } = require("jsonwebtoken")

class SessionServices{
    constructor(userRepository){
        this.userRepository = userRepository
    }

    async create({email, password}){    
        if(!email || !password){
            throw new AppError("Os campos email e senha são obrigatórios")
        }

        const user = await this.userRepository.findByEmail(email)  
        if(!user) throw new AppError("Email e/ou senha incorretos", 401)

        const correctPassword = await compare(password, user.password)
        if(!correctPassword) throw new AppError("Email e/ou senha incorretos", 401)

        const { secret, expiresIn } = authConfig.jwt
        const token = sign({}, secret, { subject: JSON.stringify({id: user.id, isAdmin: user.isAdmin}), expiresIn })

        return {user, token}
    }
}

module.exports = SessionServices