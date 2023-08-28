import React from "react";

function About({image, about}){
    function placeHolderCheck(){
    if (image === undefined){
        return "https://via.placeholder.com/215"
    }else{
        return image
    }
    }
    return(
        <aside>
            <img src={placeHolderCheck()} alt="blog logo"></img>
            <p>{about}</p>
        </aside>
    )
}

export default About;
