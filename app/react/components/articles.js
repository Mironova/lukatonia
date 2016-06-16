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
articles = [
    {
      title: 'Velit anim eiusmod labore sit amet',
      image: 'images/example-blog01.jpg',
      className: 'mdl-cell--12-col',
      description: 'Excepteur reprehenderit sint exercitation ipsum consequat qui sit id velit elit. Velit anim eiusmod \
                    labore sit amet. Voluptate voluptate irure occaecat deserunt incididunt esse in. Qui ullamco consectetur \
                    aute fugiat officia ullamco proident Lorem ad irure. Sint eu ut consectetur ut esse veniam laboris \
                    adipisicing aliquip minim anim labore commodo.'
      posted_at: '2 days ago'
    }
  ]

      <div class="mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-card mdl-shadow--4dp">
        <div class="mdl-card__title">
          <h2 class="mdl-card__title-text">Voluptate voluptate</h2>
        </div>
        <div class="mdl-card__media">
          <a href="#"> <img class="article-image" src=" images/example-blog02.jpg" border="0" alt=""></a>
        </div>
        <div class="mdl-card__supporting-text no-bottom-padding">
          <span>Posted 2 days ago</span>
          <div id="tt2" class=" icon material-icons portfolio-share-btn">share</div>
          <div class="mdl-tooltip" for="tt2">
            Share via social media
          </div>
        </div>
        <div class="mdl-card__supporting-text">
          <p>Excepteur reprehenderit sint exercitation ipsum consequat qui sit id velit elit. Velit anim eiusmod labore
            sit amet. Voluptate voluptate irure occaecat deserunt incididunt esse in.</p>
        </div>
      </div>
      <div class="mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-card mdl-card mdl-shadow--4dp portfolio-blog-card-full-bg  ">
        <div class="mdl-card__title mdl-card--expand "></div>
        <div class="mdl-card__actions">
          <span class="demo-card-image__filename">Pamukkale.jpg</span>
        </div>
      </div>
      <div class="mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-card mdl-shadow--4dp ">
        <div class="mdl-card__media">
          <a href="#"> <img class="article-image" src=" images/example-blog04.jpg" border="0" alt=""></a>
        </div>
        <div class="mdl-card__supporting-text">
          <small>Excepteur reprehenderit sint exercitation ipsum consequat qui sit id velit elit.</small>
        </div>
        <div class="mdl-card__supporting-text">
          <p>Velit anim eiusmod labore sit amet. Voluptate voluptate irure occaecat deserunt incididunt esse in. Qui
            ullamco consectetur aute fugiat officia ullamco proident Lorem ad irure. Sint eu ut consectetur ut esse
            veniam.</p>
        </div>
      </div>
      <div class="demo-card-event mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-card mdl-card mdl-shadow--4dp portfolio-blog-card-event-bg mdl-color-text--white">
        <div class="mdl-card__title mdl-card--expand">
          <h4 class="mdl-color-text--white">
            Conference event:<br>
            May 24, 2016<br>
            7-11pm
          </h4>
        </div>
        <div class="mdl-card__actions mdl-card--border">
          <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-color-text--white">
            Add to Calendar
          </a>
          <div class="mdl-layout-spacer"></div>
          <i class="material-icons ">event</i>
        </div>
      </div>
      <div class="mdl-cell mdl-cell--5-col mdl-cell--4-col-tablet mdl-card  mdl-card mdl-shadow--4dp">
        <div class="mdl-card__title mdl-card--expand portfolio-blog-card-strip-bg mdl-color-text--white">
          <h2 class="mdl-card__title-text">adipiscing</h2>
        </div>
        <div class="mdl-card__supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.
        </div>
        <div class="mdl-card__actions mdl-card--border">
          <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent">
            View Updates
          </a>
        </div>
      </div>
      <div class="mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-card  mdl-card mdl-shadow--4dp portfolio-blog-card-compact">
        <div class="mdl-card__media">
          <%= image_tag 'example-blog07.jpg', class: 'article-image' %>
        </div>
        <div class="mdl-card__title ">
          <h2 class="mdl-card__title-text">Loren</h2>
        </div>
        <div class="mdl-card__supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.
        </div>
        <div class="mdl-card__actions mdl-card--border">
          <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent">
            View Updates
          </a>
        </div>
      </div>
    </div>