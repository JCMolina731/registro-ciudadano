const express = require("express");
const fs = require("fs");
const router = express.Router();

const PATH_ROUTES = __dirname;

const removeExtension = (filename) => {
    // retornamos el filename index.js solamente el index removemos la extension
    return filename.split('.').shift()
}

fs.readdirSync(PATH_ROUTES).filter((file) =>{
    const name = removeExtension(file) // tod users,storage, tracks
    if (name !== 'index' ){
        router.use(`/${name}`,require(`./${file}`))
    }
})

module.exports = router