const { verify, decode } = require("jsonwebtoken")
const AppError = require("../utils/AppError")
const authConfig = require("../configs/auth")

function isAuthenticated(request, response, next){
    const authorization = request.headers.authorization

    if(!authorization) throw new AppError("Token de autenticação inválido", 401)

    const [, token] = authorization.split(" ")

    try{
        const {sub: user_params} = verify(token, authConfig.jwt.secret)

        request.user = JSON.parse(user_params)

        return next()
    }catch{
        throw new AppError("Token de autenticação inválido", 401)
    }
}

module.exports = isAuthenticated