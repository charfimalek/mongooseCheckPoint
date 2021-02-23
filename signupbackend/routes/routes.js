const { request } = require('express')
const express = require ('express')
const router = express.Router()
const signUpTemplateCopy = ('../models/SignUpModels.js')

router.post('/signup',(request, response) => {
    const signedUpUser = new signUpTemplateCopy ({
        name:request.body.name
    })
    signedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})

nameModel.find ({ 
    name:request.body.name
})
.then(data =>{
    response.json(data)
})
.catch(error =>{
    response.json(error)
})

nameModel.findOneAndUpdate (
    {
    age = 20
},
{
    new: true,                     
    runValidators: true              
  }
)
.then(data =>{
    response.json(data)
})
.catch(error =>{
    response.json(error)
})

nameModel.findOneAndRemove ({
    name:request.body.name
})
.then(data =>{
    response.json(data)
})
.catch(error =>{
    response.json(error)
})

signUpTemplateModel.find()
signUpTemplateModel.limit(2)
signUpTemplateModel.sort({this.name})
signUpTemplateModel.select({name:true})
signUpTemplateModel.exec()
.then(data =>{
    response.json(data)
})
.catch(error =>{
    response.json(error)
})


module.exports = router