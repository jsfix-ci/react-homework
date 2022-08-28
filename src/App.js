import React, { useState } from 'react';
import './App.css';
import { Posts } from './components/Posts';
import {FavPosts} from './components/FavoritePosts'
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { underlineAll, underlineFav } from './components/Header/Header';



function App() {

  const [isActive, setIsActive] = useState(false) 


  return (
    <div className='app__wrapper'>
    <Header>
    <div className='buttons__block'>
      <p className='button__all underline' onClick={() => {setIsActive(false); underlineAll()}}>All</p>
      <p className='button__fav' onClick = {() => {setIsActive(true); underlineFav()}}>Favorite</p>
    </div>
    </Header>
      {isActive ? <FavPosts /> : <Posts />}
      <Footer />
    </div>
  );
}

export default App;
