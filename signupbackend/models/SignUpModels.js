const mongoose = require ('mongoose')

const signUpTemplate = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        
    },
       age: {
        type: Number,
        required: true,
        
    }
})

module.exports = mongoose.model('mytable',signUpTemplate)