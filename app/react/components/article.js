import React from 'react';

const Article = () => {

  render()
  {
    const categories_list = (<span>Category: <a href="#">Latest</a></span>);
    return (
      <div className="mdl-grid mdl-cell {className} mdl-cell--4-col-tablet mdl-card mdl-shadow--4dp">
        <div className="mdl-card__media mdl-cell mdl-cell--12-col-tablet">
          <img className="article-image" src={image} border="0" alt=""/>
        </div>
        <div className="mdl-cell mdl-cell--8-col">
          <h2 className="mdl-card__title-text">{title}</h2>
          <div className="mdl-card__supporting-text padding-top">
            <span>Posted {posted_at}</span>
            <div id="tt1" className=" icon material-icons portfolio-share-btn">share</div>
            <div className="mdl-tooltip" for="tt1">
              Share via social media
            </div>
          </div>
          <div className="mdl-card__supporting-text no-left-padding">
            <p>{description}</p>
            {categories && categories_list}
          </div>
        </div>
      </div>
    )

  }
}
export default Article;