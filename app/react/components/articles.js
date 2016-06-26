import React from 'react';
import Article from './article';

const Articles = ({articles}) => {
  return (
    <div className="mdl-grid portfolio-max-width">
      {articles.map((article, index) => <Article {...article} key={index}/>)}
    </div>
  )
}

export default Articles;

