export async function fetchAvailableFood() {
    const response = await fetch("http://localhost:3000/meals");
    const meals = await response.json();

    if (!response.ok) {
        let errorMessage = "Failed to fetch places";
        if (response.status === 400) {
            errorMessage = "Bad request. Please check your request.";
        } else if (response.status === 500) {
            errorMessage = "Internal server error. Please try again later.";
        }
        throw new Error(errorMessage);
    }

    ///got this code from chatGPT, 
    //This function will fetch the meals from your backend server and transform them into the format expected by your FoodItems component.
    return meals.map((meal) => ({
        id: meal.id,
        name: meal.name,
        price: meal.price,
        description: meal.description,
        image: {
            src: meal.image,
            alt: meal.name
        }
    }));
}


export async function updateUserOrder(order){
    const response = await fetch('http://localhost:3000/orders', {
        method: 'POST',
        body: JSON.stringify({order}),
        headers:{
            'Content-Type': 'application/json'
        }
    })

    const resData = await response.json()

    if(!response.ok){
        throw new Error('Failed to update user data')
    }
    return resData.message
}
