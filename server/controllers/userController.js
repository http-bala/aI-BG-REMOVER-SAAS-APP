import {Webhook} from 'svix'
// Import your user model
import userModel from '../models/userModel.js'
// API Controller  Function to Manage Clerk User with database 
// http://localhost:4000/api/user/webhooks

const clerkWebhooks = async (req,res)=>{

    try{
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

        await whook.verify(JSON.stringify(req.body),{
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"],
        })

        const {data,type} = req.body
        switch (type){
            case "user.created": {
                // Add user to your database
                const userdata = {
                    clerkId: data.id,
                    email: data.email_addresses[0].email_address,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    photo: data.image_url  
                }
                await userModel.create(userdata)
                res.json({})
                
                break;
            }
            case "user.updated":{
                // Add user to your database
                const userdata = {
                    email: data.email_addresses[0].email_address,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    photo: data.image_url
                }
                await userModel.findOneAndUpdated({clerkId:data.id},userdata)
                res.json({}) 

                break;
            }
            case "user.deleted":{
                // Add user to your database
                await userModel.findOneAndDelete({clerkId:data.id},userdata)
                res.json({})

                break;
            }
        }

    } catch(error){
        console.log(error.message)
        res.json({success:false,message:error.message})
        
    }
}



export {clerkWebhooks}