import React from 'react';
import Header from './header';
import Nav from './nav';
import Footer from './footer';
import Articles from './articles';


const articles = [
  {
    title: 'Velit anim eiusmod labore sit amet',
    image: 'images/example-blog01.jpg',
    className: 'mdl-cell--12-col',
    description: 'Excepteur reprehenderit sint exercitation ipsum consequat qui sit id velit elit. Velit anim eiusmod \
                    labore sit amet. Voluptate voluptate irure occaecat deserunt incididunt esse in. Qui ullamco consectetur \
                    aute fugiat officia ullamco proident Lorem ad irure. Sint eu ut consectetur ut esse veniam laboris \
                    adipisicing aliquip minim anim labore commodo.',
    posted_at: '2 days ago',
    categories: 'Fresh'
  },
  {
    title: 'Velit anim eiusmod labore sit amet',
    image: 'images/example-blog01.jpg',
    className: 'mdl-cell--6-col',
    description: 'Excepteur reprehenderit sint exercitation ipsum consequat qui sit id velit elit. Velit anim eiusmod \
                    labore sit amet. Voluptate voluptate irure occaecat deserunt incididunt esse in. Qui ullamco consectetur \
                    aute fugiat officia ullamco proident Lorem ad irure. Sint eu ut consectetur ut esse veniam laboris \
                    adipisicing aliquip minim anim labore commodo.',
    posted_at: '2 days ago'
  },
  {
    title: 'Velit anim eiusmod labore sit amet',
    image: 'images/example-blog01.jpg',
    className: 'mdl-cell--6-col',
    description: 'Excepteur reprehenderit sint exercitation ipsum consequat qui sit id velit elit. Velit anim eiusmod \
                    labore sit amet. Voluptate voluptate irure occaecat deserunt incididunt esse in. Qui ullamco consectetur \
                    aute fugiat officia ullamco proident Lorem ad irure. Sint eu ut consectetur ut esse veniam laboris \
                    adipisicing aliquip minim anim labore commodo.',
    posted_at: '2 days ago'
  }
];

class App extends React.Component {

  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <Header />
        <Nav styles="mdl-layout__drawer mdl-layout--small-screen-only"/>
        <main className="mdl-layout__content">
          <Articles articles={articles}/>
          {this.props.children}

          <Footer />
        </main>
      </div>
    )
  }
}

export default App