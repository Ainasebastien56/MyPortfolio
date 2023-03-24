import React, {useState} from "react"
import picture3 from '../images/picture3.png'
 export function Contact(){
    const formInitialDetails ={
        firstname : '',
        lastname :'',
        email : '',
        phone :'',
        message :''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails)
    const [buttonText,  setButtonText] = useState('send');
    const [status, setStatus] = useState({})

    function handleChange(name, value){
        setFormDetails(
            {
                ...formDetails,
                [name] : value
            }
        )
      
    }
    async function handleSubmit(e){
        e.preventDefault()
        setButtonText('sending...');
          let response = await fetch("http://localhost:3000/contact",{
            method:"POST",
            headers:{
                "content-type":"Application/json;charset=utf-8",
            },
            body:JSON.stringify(formDetails)
          });
          setButtonText('send')
          
          let result = response.json()
          setFormDetails(formInitialDetails)
          if(result.code === 200){
            setStatus({success : true, message: "message sent successfully"})
          }
          else{
            setStatus({success: false, message: 'please try again later'})
          }
    }
    function handleChangeButton(){
        setButtonText('send...')
    }
    return (
        <div className="contact-me" id="contact">
                <div className="imageContact">
                    <img src={picture3} alt="image" />
                </div>
            <div className="formContact">
                <h2>Get in Touch</h2>
                <form className="form" onSubmit={handleSubmit}>
                   <div className="formfields">
                        <div className="formfield">
                                <input type="text" value={formDetails.firstname} name="firstname" placeholder="firstname" onChange={(e)=>{handleChange(e.target.name, e.target.value)}}/>
                                <input type="email" value={formDetails.email} name="email" placeholder="email address" onChange={(e)=>{handleChange(e.target.name, e.target.value)}} />
                            </div>
                            <div className="formfield">
                                <input type="lastname" value={formDetails.lastname} name="lastname" placeholder="lastname" onChange={(e)=>{handleChange(e.target.name, e.target.value)}}/>
                                <input type="tel" value={formDetails.phone} name="phone" placeholder="phone N." onChange={(e)=>{handleChange(e.target.name, e.target.value)}}/>
                            </div>
                            
                    </div> 

                    <div className="message">
                        <textarea name="message" value={formDetails.message} cols="45" rows="10" placeholder="message" onChange={(e)=>{handleChange(e.target.name, e.target.value)}}/>
                    </div>

                    <div className="contactbtn">
                         <button className="btn" type="submit" onClick={handleChangeButton}>{buttonText}</button>
                    </div>
                    
                   
                </form>
            </div>
            
        </div>
    )
}