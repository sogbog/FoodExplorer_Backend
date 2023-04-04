const path = require("path")
const multer = require("multer")
const crypto = require("crypto")

const uploadsFolder = path.resolve(__dirname, "..", "..", "uploads")
const tmpFolder = path.resolve(uploadsFolder, "tmp")

const MULTER = {
    storage: multer.diskStorage({
        destination: tmpFolder,
        filename(request, file, callback){
            const fileHash = crypto.randomBytes(10).toString("hex")
            const fileName = `${fileHash}-${file.originalname}`

            return callback(null, fileName)
        }
    })
}

module.exports = {
    tmpFolder,
    uploadsFolder,
    MULTER
}