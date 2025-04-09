import { useState } from 'react'

// article list
// import articlesList from './data/articles.json';

const articlesList = ['article 1', 'article 2', 'article 3', 'article 4', 'article 5'];

// Header
import Header from './components/Header';
// Main
import Main from './components/Main'

function App() {

  return (
    <>
      <Header />
      <Main articles={articlesList}/>
    </>
  )
}

export default App
