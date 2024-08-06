import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
	const items = [];
	try {
		const itemsCollectionRef = collection(db, 'users', userId, 'items');
		const q = query(itemsCollectionRef);
		const querySnapshot = await getDocs(q);
		querySnapshot.forEach((doc) => {
			items.push({
				id: doc.id,
				...doc.data()
			});
		});
	} catch (error) {
		console.log(error);
		throw new Error("Failed to retrieve items");
	}
	return items;
}

export async function addItem(userId, item) {
	let newItemId;
	try {
		const itemsCollectionRef = collection(db, "users", userId, "items");
		const docRef = await addDoc(itemsCollectionRef, item);
		newItemId = docRef.id;
	} catch (error) {
		console.log(error);
		throw new Error("Failed to add item");
	}
	return newItemId;
}