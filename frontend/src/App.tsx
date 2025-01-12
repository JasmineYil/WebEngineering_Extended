import React, { useEffect } from 'react';
import Head from './components/Head';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Article from './components/Article';
import RelatedLinks from './components/RelatedLinks';
import Footer from './components/Footer';

const App: React.FC = () => (
  <div>
    <Head />
    <Header />
    <NavBar />
    <main>
      <Article />
      <RelatedLinks />
    </main>
    <Footer />
  </div>
);

export default App;
