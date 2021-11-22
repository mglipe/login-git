const express = require('express')
const { body, validationResult } = require('express-validator')
const routes = express.Router()
const User = require('../models/User')


routes.get("/", (req,res)=>{
    res.render('pages/index')
})

routes.get("/pages/createAccount", (req, res)=>{
    res.render('pages/createAccount')
})


routes.post("/", async(req, res)=>{
    const username = req.body.name
    const password = req.body.pass

    const user = await User.findOne({where: {username: username, password: password}})
    if(user === null){
        console.log('not found!')
        return res.json({username: 'username/password does not exist or wrong'})
    }else{
        console.log(user instanceof User)
        console.log(user.username)
        res.render('pages/logged')
    }

})


routes.post("/pages/createAccount",
[
    body('email').isEmail().withMessage('requires format email'),
    body('username').isString(),
    body('password').isStrongPassword().withMessage('requires strong password'),
], async (req, res)=>{
    const err = validationResult(req)
    if(!err.isEmpty()){
        return res.status(400).json({errs: err.array()})
    }else{
        const {email, username, password, gender, birth} = req.body
        const users = await User.create({email, username, password, gender, birth})
        return res.render('pages/logged')
    }
    
})


module.exports = routes