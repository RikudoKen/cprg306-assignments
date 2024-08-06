"use client";
import React, { useState, useEffect } from 'react';

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);
    const [selectedMeal, setSelectedMeal] = useState(null);
    const [mealDetails, setMealDetails] = useState(null);

    // Function to fetch meal ideas based on ingredient
    async function fetchMealIdeas(ingredient) {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals;
    }

    // Function to fetch meal details based on meal ID
    async function fetchMealDetails( mealId ) {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
        const data = await response.json();
        return data.meals[0];
    }

    // Load meal ideas whenever the ingredient changes
    async function loadMealIdeas() {
        const mealIdeas = await fetchMealIdeas(ingredient);
        setMeals(mealIdeas);
        setSelectedMeal(null); // Reset selected meal when the ingredient changes
        setMealDetails(null);  // Reset meal details when the ingredient changes
    }

    useEffect(() => {
        if (ingredient) {
            loadMealIdeas();
        }
    }, [ingredient]);

    const handleMealClick = async (meal) => {
        const details = await fetchMealDetails(meal.idMeal);
        setSelectedMeal(meal);
        setMealDetails(details);
    };

    return (
        <div className="flex">
            <div className="w-1/2 pl-4">
                <h1 className="font-bold pl-4">Meal Ideas for {ingredient}:</h1>
                <ul>
                    {meals && meals.length > 0 ? (
                        meals.map(meal => (
                            <li key={meal.idMeal} onClick={() => handleMealClick(meal)} className="p-2 m-4 bg-blue-400 rounded cursor-pointer">
                                <h2>{meal.strMeal}</h2>
                            </li>
                        ))
                    ) : (
                        <p className="pl-4">No meal ideas found.</p>
                    )}
                </ul>
            </div>
            <div className="w-1/2 pl-4">
                {mealDetails && (
                    <div>
                        <h2 className="font-bold mb-4">{mealDetails.strMeal}</h2>
                        <img className="mb-4" src={mealDetails.strMealThumb} alt={mealDetails.strMeal} />
                        <h3 className="font-bold">Ingredients:</h3>
                        <ul className="p-2 bg-blue-400 rounded">
                            {Array.from({ length: 20 }, (_, index) => {
                                const ingredient = mealDetails[`strIngredient${index + 1}`];
                                const measure = mealDetails[`strMeasure${index + 1}`];
                                return ingredient ? (
                                    <li key={index}> {ingredient} - {measure} </li>
                                ) : null;
                            })}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
