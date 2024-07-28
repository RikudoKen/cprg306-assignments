"use client";

import { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';
import { useUserAuth } from '../_utils/auth-context';
import Link from 'next/link';

export default function Page() {

    const {user} = useUserAuth();

    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState(null);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    const handleItemSelect = (item) => {

        const parts = item.name.split(/[, ]+/);
        const cleanedItemName = parts[0].replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, '').trim();
        setSelectedItemName(cleanedItemName);
    };


    return (
        <main>
            { user ? (
                <div className="p-8 bg-orange-400 min-h-screen">
                <h1 className="text-3xl font-bold mb-6 text-left">Shopping List</h1>
                <div className="flex">
                    <div className="">
                        <NewItem onAddItem={handleAddItem} />
                        <ItemList items={items} onItemSelect={handleItemSelect} />
                    </div>
                    <div className="w-1/2 pl-4">
                        {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
                    </div>
                </div>
                </div>
                ) : (
                <div className="p-8 bg-orange-400 min-h-screen">
                    <Link href="/week-8/" className="text-3xl font-bold mb-6 text-left">Please sign in to view your shopping list</Link>
                </div>
            )}
        </main>
    );
}
