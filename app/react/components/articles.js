import React from 'react';

const Articles = ({articles}) => {
  return (
      <div className="mdl-card coffee-pic mdl-cell mdl-cell--8-col">
        <div className="mdl-card__media mdl-color-text--grey-50">
          <h3><a href="entry.html"> Pic</a></h3>
        </div>
        <div className="mdl-card__supporting-text meta mdl-color-text--grey-600">
          <div className="minilogo"></div>
          <div>
            <strong>The </strong>
            <span>2 days kjahsdflh ago</span>
          </div>
        </div>
      </div>
  )
}

export default Articles;