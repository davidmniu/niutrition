import React, { useReducer } from 'react';

import {
  Box,
  Tabs,
  Tab,
  Typography,
} from '@mui/material';

import {
  FoodList
} from './foodPanel';

import { 
  burritoIngredients, 
  riceAndChickenIngredients 
} from '../data/ingredients';

const initialState = { 
  totalCalories: 0 ,
  totalProtein: 0,
};

function foodReducer(state, action: [number,number]) {
  return { 
    totalCalories: state.totalCalories + action[0],
    totalProtein: state.totalProtein + action[1],
  }
}

export function TabMenu() {
    const [foodState, dispatch] = useReducer(foodReducer, initialState);

    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      dispatch([foodState.totalCalories * -1, foodState.totalProtein * -1]);
      setValue(newValue);
    };
  
    return (
      <Box justifyContent="center" sx={{ width: '50%' }}>
        <Typography variant="h4" >
        </Typography>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Burrito" value={0} />
            <Tab label="Chicken and Rice" value={1} />
          </Tabs>
        </Box>
        <FoodList 
          value={value} 
          index={0} 
          dispatch={dispatch}
          ingredients={burritoIngredients}
        />
        <FoodList 
          value={value} 
          index={1} 
          dispatch={dispatch}
          ingredients={riceAndChickenIngredients}
        />
        <Typography> Total Calories: {foodState.totalCalories} </Typography>
        <Typography> Total Protein: {foodState.totalProtein} </Typography>
        <Typography>Calorie Calculator by <a href={"https://github.com/davidmniu"}>Niutrition</a></Typography>
      </Box>
    );
  }