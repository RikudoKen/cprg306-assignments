"use client";

import { useState } from "react";

export default function Page(){

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            userName: name,
            userQuantity: quantity,
            userCategory: category
        }

    alert(`Name: ${formData.userName} \n Quantity: ${formData.userQuantity} \n Category: ${formData.userCategory}`);

    setName("");
    setQuantity(1);
    setCategory("produce");

    }

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    }

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }



    return(
        <main className="min-h-screen flex flex-col items-center bg-blue-500">
            <form onSubmit={handleSubmit} className="p-5 max-w-md mx-auto mt-10 bg-red-400 rounded-lg shadow-md">
                <div className="">
                    <label className="block" for="name">Name:</label>
                    <input id="name" type="text" value={name} name="name" onChange={handleNameChange} className="mt-1 p-2 w-full border rounded-lg"/>
                </div>
                <div className="">
                    <label className="block" for="quantity">Quantity:</label>
                    <input id="quantity" type="number" value={quantity} min={1} max={99} name="quantity" onChange={handleQuantityChange} className="mt-1 p-2 w-full border rounded-lg" />
                </div>
                <div className="">
                    <label className="block" for="category">Category:</label>
                    <select id="category" value={category} name="category" onChange={handleCategoryChange} className="mt-1 p-2 w-full border rounded-lg">
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen">Frozen Foods</option>
                    <option value="canned">Canned Goods</option>
                    <option value="dry">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                    </select>
                </div>
                <div className="mt-5">
                    <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg" type="submit">Add Item</button>
                </div>

            </form>
        </main>

    )


}