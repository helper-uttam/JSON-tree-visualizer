import React, { useEffect, useState, useRef } from 'react';
import ReactFlow, { Background, Controls } from 'react-flow-renderer';
import { toPng } from 'html-to-image';
import { saveAs } from 'file-saver';

function nodeColorByType(type) {
    if (type === 'object') return '#7c3aed'; // purple
    if (type === 'array') return '#10b981'; // green
    if (type === 'null') return '#f59e0b';
    return '#f97316'; // orange for primitives
}

export default function TreeCanvas({ nodes: inputNodes, edges: inputEdges, highlightPath, dark }) {
    const [nodes, setNodes] = useState([]);
    const [edges, setEdges] = useState([]);
    const [message, setMessage] = useState('');
    const wrapperRef = useRef(null);
    const [rfInstance, setRfInstance] = useState(null);

    const zoomIn = React.useCallback(() => {
        if (rfInstance && rfInstance.zoomIn) rfInstance.zoomIn();
    }, [rfInstance]);

    const zoomOut = React.useCallback(() => {
        if (rfInstance && rfInstance.zoomOut) rfInstance.zoomOut();
    }, [rfInstance]);

    const fitView = React.useCallback(() => {
        if (rfInstance && rfInstance.fitView) rfInstance.fitView();
    }, [rfInstance]);



    // sync nodes/edges with styles
    useEffect(() => {
        if (!inputNodes) {
            setNodes([]);
            setEdges([]);
            return;
        }

        const styled = inputNodes.map(n => {
            const base = { ...n };
            const t = base.data.type;
            const bg = nodeColorByType(t);
            base.style = { ...base.style, background: bg, color: '#fff' };
            if (highlightPath && base.data.path === highlightPath) {
                base.style = { ...base.style, boxShadow: '0 0 0 4px rgba(99,102,241,0.25)', background: '#ef4444' };
            }
            base.data = { ...base.data, label: `${base.data.label} ${base.data.displayValue ? `: ${base.data.displayValue}` : ''}` };
            return base;
        });
        setNodes(styled);
        setEdges(inputEdges || []);
    }, [inputNodes, inputEdges, highlightPath]);

    // pan to highlighted node when provided
    useEffect(() => {
        if (!highlightPath || !nodes.length || !rfInstance) return;
        const match = nodes.find(n => n.data.path === highlightPath);
        if (match) {
            setTimeout(() => {
                try {
                    if (rfInstance && rfInstance.setCenter) rfInstance.setCenter(match.position.x, match.position.y, { duration: 400 });
                } catch (e) {
                    // ignore
                }
            }, 200);
        }
    }, [highlightPath, nodes, rfInstance]);

    function onNodeClick(_, node) {
        const path = node.data.path;
        if (navigator.clipboard) {
            navigator.clipboard.writeText(path);
            setMessage(`Copied ${path}`);
            setTimeout(() => setMessage(''), 2000);
        }
    }

    async function handleDownload() {
        if (!wrapperRef.current) return;
        try {
            const dataUrl = await toPng(wrapperRef.current, { cacheBust: true });
            saveAs(dataUrl, 'json-tree.png');
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div className="flex-1 relative">
            <div className="absolute right-3 top-3 z-10 flex gap-2">
                <button onClick={() => zoomIn()} className={`px-2 py-1 rounded shadow ${dark ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-black hover:bg-gray-200'}`}>
                    +
                </button>
                <button onClick={() => zoomOut()} className={`px-2 py-1 rounded shadow ${dark ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-black hover:bg-gray-200'}`}>
                    -
                </button>
                <button onClick={() => fitView()} className={`px-2 py-1 rounded shadow ${dark ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-black hover:bg-gray-200'}`}>
                    Fit
                </button>
                <button onClick={handleDownload} className={`px-2 py-1 rounded shadow ${dark ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-black hover:bg-gray-200'}`}>
                    Download
                </button>
            </div>

            <div id="flow-wrapper" ref={wrapperRef} style={{ width: '100%', height: 'calc(100vh - 200px)' }}>
                <ReactFlow nodes={nodes} edges={edges} onNodeClick={onNodeClick} fitView onInit={setRfInstance}>
                    <Background gap={16} />
                    <Controls />
                </ReactFlow>
            </div>

            {message && <div className="absolute left-3 bottom-3 bg-black text-white px-3 py-1 rounded dark:bg-white dark:text-black">{message}</div>}
        </div>
    );
}
