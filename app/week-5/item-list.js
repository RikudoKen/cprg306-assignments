"use client";
import { useState } from 'react';
import Item from "./item";
import items from './items.json';

export default function ItemList() {
    const [sortBy, setSortBy] = useState('name');

    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });

    const groupedItems = items.reduce((groups, item) => {
        const category = item.category;
        if (!groups[category]) {
            groups[category] = [];
        }
        groups[category].push(item);
        return groups;
    }, {});

    const renderItems = () => {
        if (sortBy === 'group') {
            return Object.keys(groupedItems).sort().map(category => (
                <div key={category} className="mb-4">
                    <h2 className="capitalize text-xl font-semibold">{category}</h2>
                    <ul>
                        {groupedItems[category].sort((a, b) => a.name.localeCompare(b.name)).map(item => (
                            <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
                        ))}
                    </ul>
                </div>
            ));
        } else {
            return (
                <ul>
                    {sortedItems.map(item => (
                        <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
                    ))}
                </ul>
            );
        }
    };

    return (
        <div>
            <div className="mb-4">
                <button className={`mr-2 p-2 rounded-lg ${sortBy === 'name' ? 'bg-blue-400' : 'bg-gray-200'}`} onClick={() => setSortBy('name')}>
                    Sort by Name
                </button>
                <button className={`mr-2 p-2 rounded-lg ${sortBy === 'category' ? 'bg-blue-400' : 'bg-gray-200'}`} onClick={() => setSortBy('category')}>
                    Sort by Category
                </button>
                <button className={`p-2 rounded-lg ${sortBy === 'group' ? 'bg-blue-400' : 'bg-gray-200'}`} onClick={() => setSortBy('group')}>
                    Group by Category
                </button>
            </div>
            {renderItems()}
        </div>
    );
}
