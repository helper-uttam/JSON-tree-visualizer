import { useState, useEffect, useMemo } from 'react';
import './App.css';
import JSONInput from './components/JSONInput';
import Header from './components/Header';
import { jsonToFlow } from './utils/jsonToFlow';
import TreeCanvas from './components/TreeCanvas';
import SearchBar from './components/SearchBar';

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
  const [highlightPath, setHighlightPath] = useState('');

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

  function handleSearch(q) {
    if (!q) {
      setHighlightPath('');
      return;
    }
    // Normalize: allow both starting with $ or without
    const path = q.startsWith('$') ? q : `$${q.startsWith('.') || q.startsWith('[') ? '' : '.'}${q}`;
    // Try exact match
    const found = nodes.find(n => n.data.path === path);
    if (found) {
      setHighlightPath(path);
    } else {
      setHighlightPath('');
      alert('No match found');
    }
  }

  function toggleTheme() {
    setDark(d => !d);
  }

  return (
    <div className={"h-screen flex flex-col"}>
      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
        <Header dark={dark} onToggleTheme={toggleTheme} onZoomIn={() => { }} onZoomOut={() => { }} onFitView={() => { }} />
        <SearchBar onSearch={handleSearch} />

        <div className="flex gap-4 p-4" style={{ height: 'calc(100vh - 140px)' }}>
          <div className={`w-96 rounded shadow overflow-auto ${dark ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
            <JSONInput onGenerate={setJsonData} />
          </div>

          <div className={`flex-1 rounded shadow ${dark ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}>
            <TreeCanvas dark={dark} nodes={nodes} edges={edges} highlightPath={highlightPath} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
