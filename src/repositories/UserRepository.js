const knex = require("../database/knex")

class UserRepository{

    async findByEmail(email){        
        const user = await knex("users").where({email}).first()

        return user
    }

    async adminExists(){
        const admin = await knex("users").where("isAdmin", true).first()

        return admin
    }

    async create({name, email, password, isAdmin}){
        const createdUser = await knex("users").insert({
            name,
            email,
            password,
            isAdmin
        })

        return createdUser
    }
}

module.exports = UserRepository