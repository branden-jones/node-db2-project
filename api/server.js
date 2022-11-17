const express = require("express")

const server = express()
server.use(express.json());

server.use('*', (req,res,next) => {
    next({ 
        server: 404,
        message: "Not Found... Marco..."
    })
})

server.use((err,req,res,next) => { //eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message
    })
})

// DO YOUR MAGIC

module.exports = server
