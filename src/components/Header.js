import React from 'react';

export default function Header({ onToggleTheme, onZoomIn, onZoomOut, onFitView, dark }) {
    const btnBase = "px-2 py-1 rounded flex items-center gap-2";
    const lightBtn = "bg-gray-100 text-black hover:bg-gray-200 border border-gray-200";
    const darkBtn = "bg-gray-800 text-white hover:bg-gray-700 border border-gray-700";

    return (
        <div className={`flex items-center justify-between p-3 border-b ${dark ? 'bg-gray-800 text-white border-gray-700' : 'bg-gray-200 text-black border-gray-200'}`}>
            <div className="text-lg font-semibold">JSON Tree Visualizer</div>
            <div className="flex items-center gap-2">
                <button className={`${btnBase} ${dark ? darkBtn : lightBtn}`} onClick={onZoomIn}>Zoom In</button>
                <button className={`${btnBase} ${dark ? darkBtn : lightBtn}`} onClick={onZoomOut}>Zoom Out</button>
                <button className={`${btnBase} ${dark ? darkBtn : lightBtn}`} onClick={onFitView}>Fit</button>
                <button className={`${btnBase} ${dark ? darkBtn : lightBtn}`} onClick={onToggleTheme}>
                    <span>{dark ? 'Dark' : 'Light'}</span>
                    <span className="text-sm opacity-70">Toggle</span>
                </button>
            </div>
        </div>
    );
}
