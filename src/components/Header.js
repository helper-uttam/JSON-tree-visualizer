import React from 'react';

export default function Header({ onToggleTheme, onZoomIn, onZoomOut, onFitView, dark }) {


    return (
        <div className={`flex items-center justify-between p-3 border-b ${dark ? 'bg-gray-800 text-white border-gray-700' : 'bg-gray-200 text-black border-gray-200'}`}>
            <div className="text-lg font-semibold">JSON Tree Visualizer</div>
            <div className="flex items-center gap-2">
                <button className="px-2 py-1 rounded flex items-center gap-2" onClick={onZoomIn}>Zoom In</button>
                <button className="px-2 py-1 rounded flex items-center gap-2" onClick={onZoomOut}>Zoom Out</button>
                <button className="px-2 py-1 rounded flex items-center gap-2" onClick={onFitView}>Fit</button>
                <button className="px-2 py-1 rounded flex items-center gap-2" onClick={onToggleTheme}>
                    <span>{dark ? 'Dark' : 'Light'}</span>
                    <span className="text-sm opacity-70">Toggle</span>
                </button>
            </div>
        </div>
    );
}
