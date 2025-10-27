import React, { useRef, useState } from 'react';

const SAMPLE = `{
  "user": {
    "id": 1,
    "name": "Uttam",
    "address": {
      "city": "Patna",
      "zip": "800020"
    },
    "tags": ["developer", "technical writer"]
  },
  "items": [
    {"name": "Item 1", "qty": 2},
    {"name": "Item 2", "qty": 5}
  ]
}`;

export default function JSONInput({ onGenerate }) {
    const textareaRef = useRef(null);
    const [error, setError] = useState(null);

    function handleGenerate() {
        const text = textareaRef.current.value;
        try {
            const parsed = JSON.parse(text);
            setError(null);
            onGenerate(parsed);
        } catch (e) {
            //console.log(e.message);
            setError(e.message);
        }
    }

    function handleClear() {
        if (textareaRef.current) {
            textareaRef.current.value = '';
        }
        setError(null);
        onGenerate(null);
    }

    return (
        <div className="p-4">
            <label className="block font-semibold mb-2">Paste Any Valid JSON</label>
            <textarea
                ref={textareaRef}
                className="w-full h-40 p-2 border rounded text-sm font-mono text-black"
                defaultValue={SAMPLE}
                placeholder={SAMPLE}
            />
            <div className="mt-2 flex gap-2">
                <button className="px-3 py-1 bg-blue-600 text-white rounded" onClick={handleGenerate}>
                    Generate Tree
                </button>
                <button className="px-3 py-1 bg-gray-300 text-black rounded dark:bg-gray-600 dark:text-white" onClick={handleClear}>
                    Clear
                </button>
            </div>
            {error && <div className="mt-2 text-red-600">Invalid JSON: {error}</div>}
        </div>
    );
}
