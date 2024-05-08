import React from "react";

export default function FoodItems({
  name,
  foodItems,
  fallbackText,
  onSelectFood,
  isLoading,
  loadingText,
}) {
  console.log(foodItems);
  console.log("food items should be logged here");
  return (
    <section>
      {/* {isLoading && <p>{loadingText}</p>} */}
      {/* {!isLoading && <p>{fallbackText}</p>} */}
      {!isLoading && (
        <ul id="meals">
          {foodItems.map((food) => (
            <li key={food.id} className="meal-item">
              <article>
                <img
                  src={`http://localhost:3000/${food.image.src}`}
                  alt={food.image.alt}
                />
                <h3>{food.name}</h3>
                <div>
                  <p className="meal-item-price">{"$" + food.price}</p>
                </div>
                <div>
                  <p className="meal-item-description">{food.description}</p>
                </div>
                <div>
                  <button className="button" style={{ marginBottom: '20px' }} onClick={() => onSelectFood(food)}>Add to Cart</button>
                </div>
              </article>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
