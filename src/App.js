import React from 'react';
import './App.css';
import { Layout } from './components/Layouts/Layout';
import { Posts } from './components/Posts/Posts';
import { ThemeProvider } from './components/ThemeProvider/ThemeProvider';


function App() {
  return (
    <ThemeProvider>
      <div className='blogContainer'>
        <Layout>
          <Posts />
        </Layout>
      </div>
    </ThemeProvider>
  );
}

export default App;
