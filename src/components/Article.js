import React from "react"

function Article({title,date,preview}){
    function placeHolderCheck(){
        if (date === undefined){
            return "January 1, 1970"
        }else{
            return date
        }
    }
    return(
        <article>
            <h3>{title}</h3>
            <small>{placeHolderCheck()}</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article