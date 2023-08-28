import React from "react";
import Article from "./Article";

function ArticleList({posts}){
    function renderArticle(){
    return posts.map((post)=>{return <Article key={post.id} title={post.title} date={post.date} preview={post.preview}/>})
    }
    return(
        <main>
            {renderArticle()}
        </main>
    )
}

export default ArticleList