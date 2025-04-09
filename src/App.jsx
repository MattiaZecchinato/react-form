import { useState } from 'react'

// article list
import articlesList from './data/articles.json';

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
