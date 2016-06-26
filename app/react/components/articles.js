import React from 'react';
import Article from './article';

const Articles = ({articles}) => {
  return (
    <div className="articles">
      {articles.map((article, index) => <Article article={article} key={index}/>)}
    </div>
  )
}

export default Articles;

