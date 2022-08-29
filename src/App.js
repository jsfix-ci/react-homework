import React, { useState } from 'react';
import './App.css';
import { PostsList } from './components/PostsList';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { underlineAll, underlineFav } from './components/Header/Header';



function App() {

  const [activeTab, setActiveTab] = useState('all') 

  return (
    <div className='app__wrapper'>
    <Header>
    <div className='buttons__block'>
      <p className={activeTab === 'all' ? 'button__all underline' : 'button__all'} onClick={() => setActiveTab('all')}>All</p>
      <p className={activeTab === 'all' ? 'button__fav' : 'button__fav underline'} onClick = {() => setActiveTab('fav')}>Favorite</p>
    </div>
    </Header>
      <PostsList value = {activeTab} />
    <Footer />
    </div>
  );
}

export default App;
