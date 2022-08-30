import React, { useState } from 'react';
import './App.css';
import { PostsList } from './components/PostsList';
import { Layout } from './components/Layout/Layout';




function App() {

  return (
      <Layout>
        <PostsList />
      </Layout>
  );
}

export default App;
