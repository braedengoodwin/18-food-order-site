import React, { useEffect, useState } from 'react'
import { fetchAvailableFood } from '../http'
import FoodItems from './FoodItems'

export default function AvailableFood({ onSelectFood }){
    const [isFetching, setIsFetching] = useState()
    const [availableFood, setAvailableFood] = useState([])
    const [error, setError] = useState()

    useEffect(() =>{
        async function fetchFood(){
            setIsFetching(true);
            try{
                const foodItems = await fetchAvailableFood()
                setAvailableFood(foodItems)
                setIsFetching(false)
            } catch( error){
                setError({
                    message:
                    error.message || "Could not fetch places, please try again later"
                })
                setIsFetching(false)
            }
        }

        fetchFood()
    }, [])

    // need to create an eror component 
    // if(error){
    //     return <Error title={"An error occured"} message={error.message}/>
    // }

    return(
        <FoodItems
            name="Available food"
            foodItems={availableFood}
            isLoading={isFetching}
            loadingText="Fetching food data..."
            fallbackText="No food available"
            onSelectFood={onSelectFood}
        />
    )
}