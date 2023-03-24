import React from "react";
export function Banner(){
    return (
        <div className="banner" id="home">
                <div className="container">
                    <div className="description">
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>Hi, I'm Web developer Javascript</h1>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur laudantium fugit recusandae! Aliquam fugit alias quidem corrupti labore, voluptate iste ut ipsum culpa iusto
                        </p>
                        <button className="btn" onClick={()=> console.log('connect')}>Hire me !</button>
                    </div>
                    <div className="picture">
                            <img src="./assets/astronaut.png" alt="astronaut" />
                        </div>
                </div>
                
        </div>
    )
} 