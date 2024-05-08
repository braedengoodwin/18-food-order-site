import AvailableFood from "./components/AvailableFood";
import Header from "./components/Header";
import React, { useState } from "react";
import Modal from "./components/Modal";
import { updateUserOrder } from "./http";

function App() {
  const [cartClick, setCartClick] = useState(false)
  
  const [userFood, setUserFood] = useState([])

  async function handleSelectFood(selectedFood){

    setUserFood((prevPickedFood) => {
      if (!prevPickedFood){
        prevPickedFood = []
      }
      if (prevPickedFood.some((food) => food.id === selectedFood.id)) {
        return prevPickedFood
      }
      return [selectedFood, ...prevPickedFood]
    })

    try{
      await updateUserOrder([selectedFood, ...userFood])
    } catch(error){
      setUserFood(userFood)
      ///should add error handling here
    }
  }

  return (
    <>
      <Header setCartClick={setCartClick}/>
      {cartClick && <Modal open={cartClick} onClose={() => setCartClick(false)}>Your Cart</Modal>}
      <main>
        <AvailableFood onSelectFood={handleSelectFood}/>
      </main>
    </>
  );
}

export default App;
