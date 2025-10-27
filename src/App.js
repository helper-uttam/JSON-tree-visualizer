import { useState, useEffect } from 'react';
import './App.css';
import JSONInput from './components/JSONInput';
import Header from './components/Header';

function App() {
  const [jsonData, setJsonData] = useState(null);
  const [dark, setDark] = useState(() => {
    try {
      const saved = localStorage.getItem('theme');
      return saved === 'dark';
    } catch (e) {
      return false;
    }
  });

  useEffect(() => {
    try {
      if (dark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    } catch (e) {
      // ignore
    }
  }, [dark]);


  function toggleTheme() {
    setDark(d => !d);
  }

  return (
    <div className={"h-screen flex flex-col"}>
      <Header dark={dark} onToggleTheme={toggleTheme} onZoomIn={() => { }} onZoomOut={() => { }} onFitView={() => { }} />
      <div className="flex gap-4 p-4" style={{ height: 'calc(100vh - 140px)' }}>
        <div className={`w-96 rounded shadow overflow-auto`}>
          <JSONInput onGenerate={setJsonData} />
        </div>
      </div>
    </div>
  );
}

export default App;
