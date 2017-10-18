import React from 'react'
import Article from './Article'


export default function ArticleList({articles}) {
    const articleElemants = articles.map((article) => <li key = {article.id}><Article article = {article}/></li>)
    return (
        <ul>
            {articleElemants}
        </ul>
    )
    
}

//first lesson
//test1