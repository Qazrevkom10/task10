import React from 'react';
import AdForm from './components src/AdForm';
import AdList from './components src/AdList';
import './styles.css'; 

const App = () => {
  return (
    <div>
      <h1>Bulletin Board</h1>
      <AdForm />
      <AdList />
    </div>
  );
};

export default App;
