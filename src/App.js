import React, { useState } from 'react';
import './style.css';
import explorer from './data/folderData.js';
import Folder from './components/folder.js';

export default function App() {
  const [exploreData, setExplorerData] = useState(explorer);

  console.log(exploreData, 'check');

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <Folder explorer={exploreData} />
    </div>
  );
}
