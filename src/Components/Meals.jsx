import React from 'react'
import { useGlobalContext } from '../Context'
import { BsHandThumbsUp } from 'react-icons/bs'

const Meals = () => {
  const { loading, meals ,selectMeal,addfavorite} = useGlobalContext()

  if(loading){
    return <section className='section'>
    <h4>Loading...</h4>
    </section>
  }
  if(meals.length<1){
    return(
    <section className='section'>
      <h4>Your search didn't match any Meal ,Try Again</h4>
    </section>
  )}
  return (
    <>
      <section className='section-center'>
        {
          meals.map((singleMeal) => {
            // console.log(singleMeal);
            const { idMeal, strMeal: title, strMealThumb: image } = singleMeal
           return(
            <article key={idMeal} className='single-meal'>
              <img src={image} className="img" onClick={()=>selectMeal(idMeal)} alt="oto"/>
              <footer>
                <h5>{title}</h5>
                <button className='like-btn' onClick={()=>addfavorite(idMeal)}><BsHandThumbsUp /></button>
              </footer>
            </article>
      )})
    }
      </section>
    </>
  )
}

export default Meals
