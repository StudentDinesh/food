import React from 'react'
import { NavLink } from 'react-router-dom';

const Card = ({details}) => {
  console.log(details);
  
  return (
    <div className='meals'>
      {!details ? "Sorry Data Not Found"  : details.map((curItem,index) => {
        return(
          <div className='mealImg'>
            <img src={curItem.strMealThumb}/>
            <p>{curItem.strMeal}</p>
            <NavLink to={`/${curItem.idMeal}`}> <button >Recipe</button></NavLink>          
          </div>
        )
      })   
      }
    </div>
  )
}

export default Card