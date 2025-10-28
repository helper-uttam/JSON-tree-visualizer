import React, { useState } from 'react';

export default function SearchBar({ onSearch }) {
    const [q, setQ] = useState('');

    function handleSearch() {
        onSearch(q.trim());
    }

    return (
        <div className="p-2 flex gap-2 items-center">
            <input
                className="flex-1 p-2 border rounded text-black"
                value={q}
                onChange={e => setQ(e.target.value)}
                placeholder="Search by path, e.g. $.user.address.city or items[0].name"
            />
            <button className="px-3 py-1 bg-indigo-600 text-white rounded" onClick={handleSearch}>Search</button>
        </div>
    );
}
