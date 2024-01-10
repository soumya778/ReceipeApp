import React from 'react'
import { useGlobalContext } from '../Context'

const Favourite = () => {
  const {favorite,removeFavorite,selectMeal}=useGlobalContext()
  console.log(removeFavorite);
  return (
   <section className='favorites'>
    <div className='favorites-content'>
      <h5>Favorites</h5>
      <div className='favorites-container'>
        {
          favorite.map((item)=>{
              const {idMeal,strMealThumb:image}=item
              return(
                <div key={idMeal} className='favorite-item'>
                  <img src={image} className='favorites-img img' onClick={()=>selectMeal(idMeal)} alt="picture"/>
                 
                  <button className='remove-btn' onClick={()=>removeFavorite(idMeal)}>Remove</button>
                </div>
              )
          })
        }
      </div>
    </div>
   </section>
  )
}

export default Favourite
