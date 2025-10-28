import { useState, useEffect, useMemo } from 'react';
import './App.css';
import JSONInput from './components/JSONInput';
import Header from './components/Header';
import { jsonToFlow } from './utils/jsonToFlow';
import TreeCanvas from './components/TreeCanvas';

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

  const { nodes, edges } = useMemo(() => {
    if (!jsonData) return { nodes: [], edges: [] };
    return jsonToFlow(jsonData);
  }, [jsonData]);

  function toggleTheme() {
    setDark(d => !d);
  }

  return (
    <div className={"h-screen flex flex-col"}>
      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
        <Header dark={dark} onToggleTheme={toggleTheme} onZoomIn={() => { }} onZoomOut={() => { }} onFitView={() => { }} />
        <div className="flex gap-4 p-4" style={{ height: 'calc(100vh - 140px)' }}>
          <div className={`w-96 rounded shadow overflow-auto ${dark ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
            <JSONInput onGenerate={setJsonData} />
          </div>

          <div className={`flex-1 rounded shadow ${dark ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}>
            <TreeCanvas dark={dark} nodes={nodes} edges={edges} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
