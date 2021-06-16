import {useState,useEffect} from 'react';
import classes from './MealsAvailability.module.css';
import Card from'../UI/Card';
import MealItem from './MealItem/MealItem';
// import { response } from 'express';
const MealsAvailability =() =>
{
  const [mdata , setMdata] = useState([]);
  const [loading,setLoading] = useState(true);
  const[error,setError] = useState();
    useEffect(()=>
      {
        // setLoading(true);
        const mealHttp = async () =>
        {
          const reponse  = await fetch('https://react-5-default-rtdb.firebaseio.com/meals.json');
          if(!reponse.ok)
          {
            throw new error("some thing went wrong");
          }
          const Data = await reponse.json();
          const mealsData = [];
          for(const keys in Data)
          {
            mealsData.push(
              {
                id : keys,
                name : Data[keys].name,
                price : Data[keys].price,
                description : Data[keys].description
              }
            )
          }
          setLoading(false);
          setMdata(mealsData); 
        }
        mealHttp().catch(error =>
          {
            setLoading(false);
            setError(error.message);
            // console.log(error);
          });
        
      },[error]);
    if(error)
    {
      
      return <section className = {classes.errormsg}>
        <p>{error}</p>
      </section>
    }
    
      const dummymeal = mdata.map(meal => <MealItem key = {meal.id} id = {meal.id} name = {meal.name} cost = {meal.price} description = {meal.description}>{meal['name']}</MealItem>)
      console.log(dummymeal);
    return( 
            <section className = {classes.meals}>
              
            <Card>
            {loading &&  <p className = {classes.loading} >loading...</p>}            
            <ul>
              
                {dummymeal}
            </ul>
            </Card>
            </section>
        

    );
}
export default MealsAvailability;