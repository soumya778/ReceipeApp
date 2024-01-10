import React,{useContext, useEffect, useState} from "react";
import axios from "axios";
const AppContext=React.createContext()

//taking data from meal db
const allMealUrl="https://www.themealdb.com/api/json/v1/1/search.php?s="
const randomUrl="https://www.themealdb.com/api/json/v1/1/random.php"



const AppProvider=({children})=>{
    const[meals,setMeals]=useState([])
    const[loading,setLoading]=useState(false)
    const[searchterm,setSearchterm]=useState("")
    const[showModal,setShowModal]=useState(false)
    const[selectedMeal,setSelectedMeal]=useState(null)
    const[favorite,setFavorite]=useState([])
 
   
    //function to fetch data
    //it can also be defined in the useEffect hook
    const fetchMeals=async(url)=>{
        setLoading(true)
        try{
           const {data}=await axios.get(url)
           if(data.meals){
           setMeals(data.meals)}
           else{
            setMeals([])
           }
        }
        catch(error){
            console.log(error.response);
        }
        setLoading(false)
     }
    //useEffect hook is used to call the fetchdata func when the page loads
    useEffect(()=>{
       fetchMeals(`${allMealUrl}${searchterm}`);
    },[searchterm])

    const fetchRandom=()=>{
        fetchMeals(randomUrl)
    }

    const selectMeal=(idMeal,favoriteMeal)=>{
        let meal
        if(favoriteMeal){
            meal= favorite.find((meal)=>meal.idMeal===idMeal)
        }
        else{
            meal= meals.find((meal)=>meal.idMeal===idMeal)
        }
        setSelectedMeal(meal)
        setShowModal(true)
    }

    const closeModal=()=>{
        setShowModal(false)
    }

    const addfavorite=(idMeal)=>{
       
        const alrdyfavorite=favorite.find((meal)=>meal.idMeal===idMeal)
        if(alrdyfavorite) return
        const meal=meals.find((meal)=>meal.idMeal===idMeal)
        const updatedfavorite=[...favorite,meal]
        setFavorite(updatedfavorite)
    }

    const removeFavorite=(idMeal)=>{
        const updatedfavorite=favorite.filter((meal)=>meal.idMeal!==idMeal)
        setFavorite(updatedfavorite)
    }

  
    return <AppContext.Provider value={{loading,meals,setSearchterm,fetchRandom,showModal,selectedMeal,selectMeal,closeModal,addfavorite,removeFavorite,favorite}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext=()=>{
       return useContext(AppContext)
}

export {AppContext,AppProvider }