import {Fragment} from 'react';
import MealsAvailability from './MealsAvailability';
import MealsSummary from './MealsSummary';
const Meals = () =>
{
    return(
        <Fragment>
        <MealsSummary/>
        <MealsAvailability/>
        </Fragment>
    );
}
export default Meals;