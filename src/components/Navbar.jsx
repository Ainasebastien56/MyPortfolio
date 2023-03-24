 import React, {useState,useEffect} from 'react'

 
 
 function Navbar(){
    const [Scrolled, setScrolled] = useState(false)
    const [Active, setActive] = useState('home')


    function onClickActive  (value){
        setActive(value)
    
    }
   useEffect(()=>{
    const onScroll = function(){
        if(window.scrollY > 50){
            setScrolled(true)
        }
        else{
            setScrolled(false)
        }
    }
    window.addEventListener('scroll',onScroll)
       
        return () =>window.removeEventListener('scroll',onScroll)
   },[])
    return (
        <div id='navbar' className={Scrolled === true? 'navbarBackground' : '' }>
            <div className="logo">
                <h1><span className="A">A</span>ina</h1>
            </div>

    <nav className="links">
        <a href="#home" className={Active === 'home'? 'activeLink' : ''} onClick={()=>onClickActive('home')}>Home</a>
        <a href="#skills"className={Active === 'skills'? 'activeLink' : ''} onClick={()=>onClickActive('skills')}>Skills</a>
        <a href="#projects"className={Active === 'projects'? 'activeLink' : ''} onClick={()=>onClickActive('projects')}>Projects</a>
        <a href="#contact"><button className="contact">Contact me</button></a>
      
    </nav>
        </div>
    
    )
}
export default Navbar