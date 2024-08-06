"use client";

import { useState, useEffect } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import { useUserAuth } from '../_utils/auth-context';
import Link from 'next/link';
import { getItems, addItem } from '../_services/shopping-list-service';

export default function Page() {
	const { user } = useUserAuth();
	const [items, setItems] = useState([]);
	const [selectedItemName, setSelectedItemName] = useState(null);

	const loadItems = async () => {
		if (user) {
			const itemsData = await getItems(user.uid);
			setItems(itemsData);
		}
	};

	useEffect(() => {
		loadItems();
	}, [user]);

	const handleAddItem = async (newItem) => {
		if (user) {
			const addedItemId = await addItem(user.uid, newItem);
			setItems([...items, { ...newItem, id: addedItemId }]);
		}
	};

	const handleItemSelect = (item) => {
		const parts = item.name.split(/[, ]+/);
		const cleanedItemName = parts[0].replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, '').trim();
		setSelectedItemName(cleanedItemName);
	};

	return (
		<main>
			{user ? (
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
