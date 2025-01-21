import React, { useState } from 'react';
import Page1 from './pages/Page1.js';
import Page2 from './pages/Page2.js';
import Page3 from './pages/Page3.js';



function App() {
  const [selectedPage, setSelectedPage] = useState('1');

  // Map page numbers to components
  const pages = {
    '1': <Page1 />,
    '2': <Page2 />,
    '3': <Page3 />,


    
  };

  const handleChange = (event) => {
    setSelectedPage(event.target.value);
  };

  return (
    <div className="App">
      <h1>Select a Page</h1>
      <select value={selectedPage} onChange={handleChange}>
        <option value="1">Page 1</option>
        <option value="2">Page 2</option>
        <option value="3">Page 3</option>
      </select>
      <div className="page-container">
        {pages[selectedPage]}
      </div>
    </div>
  );
}

export default App;