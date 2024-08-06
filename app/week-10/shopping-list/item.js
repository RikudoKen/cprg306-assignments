import React from 'react';

export default function Item({ name, quantity, category, onSelect }) {
    return (
        <li 
            className="p-2 mb-4 bg-blue-400 max-w-sm rounded-lg cursor-pointer"
            onClick={onSelect}
        >
            <p className="font-bold text-gray-700">{name}</p>
            <p className="text-gray-700">Buy {quantity} in {category}</p>
        </li>
    );
}
