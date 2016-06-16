import React from 'react';
import Header from './header';
import Nav from './nav';
import Footer from './footer';
import Articles from './articles';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <main className="mdl-layout__content">
          <div className="mdl-grid portfolio-max-width">
            <Articles />
            {this.props.children}
          </div>

          <Footer />
        </main>
      </div>
    )
  }
}

export default App