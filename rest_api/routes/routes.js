const { request, json } = require('express');
const express= require('express');
const UserModel = require('../model/UserModel');
const userModel =require('../model/UserModel')

const router =express.Router();

//welcome
    router.get('/', (req, res) =>{
        res.send('welcome to nodejs router')
    })

//app-url
    router.get('/app', (req, res) =>{
        res.send('welcome to nodejs app')
    })

//user route
//user-get-all
    router.get('/user', async (req, res) =>{
        try {

            const users = await UserModel.find()
            res.status(200).json({
                data:users,
                message:"user-list-found",
                status:true
            })
            
        } catch (err) {
            res.json({
                data:req.body,
                message: "user-not found",
                status:false
            })
        }
    })
//user-find-by-id 
    router.get('/user/:id', async (req, res)=>{
        try {

            //console.log(req.params.id);
            
            const user = await UserModel.findById(req.params.id)

            res.status(200).json({
                data:user,
                message:"user-list-found",
                status:true
            })

        } catch (errors) {
            
            res.status(500).json({
                data:req.body,
                message: errors,
                status:false
            })
        }
    })

//user-create
    router.post('/user', (req, res) =>{
        const newUser = new UserModel({
            title:req.body.title,
            description:req.body.description
        })

        newUser.save().then(data=>res.send(data)).catch(err => console.error(err, 'Failed to saved data'))
    })

//user-edit-by-id 
    router.patch('/user/:id', async (req, res) =>{
        try {

            //console.log(req.params.id);
            
            const userUpdate =  await UserModel.updateOne({_id:req.params.id},{$set:{title:req.body.title, description:req.body.description}})

            res.status(200).json({
                data:userUpdate,
                message:"user-list-updated",
                status:true
            })

        } catch (errors) {
            
            res.status(500).json({
                data:req.body,
                message: errors,
                status:false
            })
        }
    })

//user-delete-by-id
    router.delete('/user/:id' , async (req, res) =>{
        try {

            const userDelete = await UserModel.deleteOne({_id:req.params.id})
            res.status(200).json({
                data:userDelete,
                message:"user-deleted",
                status:true
            })
            
        } catch (errors) {

            res.status(500).json({
                data:req.body,
                message: errors,
                status:false
            })
        }
    })

//router-exports-form-route-namespaces
module.exports = router;
