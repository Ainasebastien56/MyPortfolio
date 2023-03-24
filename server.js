import express from 'express'
import cors from "cors"
import  nodemailer from 'nodemailer' 

const router = express.Router();


const app = express()
app.use(cors());
app.use(express.json());
app.use("/",router)

const contactEmail = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    auth:{
        user:"sebastienrandriamanana3@gmail.com",
        pass:""
    }
});
contactEmail.verify((error)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log('ready to send')
    }
})


router.post("/contact",(req,res)=>{
    const name = req.body.firstname + req.body.lastname
    const email = req.body.email
    const message = req.body.message
    const phone = req.body.phone
    const mail = {
        from:email,
        to:'sebastienrandriamanana3@gmail.com',
        subject:'contact from submission - Portfolio',
        htlm: ` <p>${name}</p>
                <p>${email}</p>
                <p>${phone}</p>
                <p>${message}</p>`
    }
    contactEmail.sendMail(mail, (error)=>{
    if(error){
        res.json(error)
    }else{
        res.json({code: 200, status:'Message send'})
    }
})
})


app.listen(3000, ()=>console.log('server running'))