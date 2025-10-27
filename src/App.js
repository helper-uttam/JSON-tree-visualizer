import { useState } from 'react';
import './App.css';
import JSONInput from './components/JSONInput';
import Header from './components/Header';

function App() {
  const [jsonData, setJsonData] = useState(null);

  console.log(jsonData);

  return (
    <div className={"h-screen flex flex-col"}>
      <Header dark={"dark"} onToggleTheme={"toggleTheme"} onZoomIn={() => { }} onZoomOut={() => { }} onFitView={() => { }} />
      <div className="flex gap-4 p-4" style={{ height: 'calc(100vh - 140px)' }}>
        <div className={`w-96 rounded shadow overflow-auto`}>
          <JSONInput onGenerate={setJsonData} />
        </div>
      </div>
    </div>
  );
}

export default App;
