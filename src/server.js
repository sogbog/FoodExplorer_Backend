require("dotenv/config")
require("express-async-errors")

const Express = require("express")
const routes = require("./routes")
const cors = require("cors")
const AppError = require("./utils/AppError")
const uploadConfig = require("./configs/upload")

const express = Express()
const port = process.env.PORT || 3333

express.use(cors())
express.use(Express.json())
express.use("/files", Express.static(uploadConfig.uploadsFolder))
express.use(routes)
express.use((error, request, response, next) => {
    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    })
})

express.listen(port, () => console.log(`Server running on port ${port}`))