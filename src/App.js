import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from './Layouts/Layout'
import Home from './Pages/Home'
import BurgerMaker from './Pages/BurgerMaker'
import BurgerContext from './Contex/BurgerContext'

function App() {
  const [ingridients, setIngridients] = useState([])

  const addIngridientsHandler = (ingridients) => {
      setIngridients( prevState => {
          const newState = [ingridients, ...prevState]
          return newState
      })
  }

  const removeIngridientsHandeler = (index) => {
      setIngridients (prevState => {
          const newState = [...prevState]
          newState.splice( index, 1 )
          return newState
      })
  }

  const moveUpIngridientsHandler = (index) => {
      setIngridients (prevState => {
          const newState = [...prevState]
          const temp = newState[index-1]
          newState[index-1] = newState[index]
          newState[index]=temp
          return newState
      })
  }

  const moveDownIngridientsHandler = (index) => {
      setIngridients (prevState => {
          const newState = [...prevState]
          const temp = newState[index+1]
          newState[index+1]=newState[index]
          newState[index] = temp
          return newState
      })
  }

  return (
    <BurgerContext.Provider value={ {ingridients, setIngridients, addIngridientsHandler, removeIngridientsHandeler, moveUpIngridientsHandler, moveDownIngridientsHandler}} >
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='burger-maker' element={<BurgerMaker />} />
        </Routes>
      </Layout>
    </BurgerContext.Provider>
  );
}

export default App;