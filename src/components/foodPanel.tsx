import React from "react";

import {
    Button,
    Box,
    Grid,
    TextField,
    Input,
    Typography,
} from "@mui/material";

import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';

interface FoodEntryProps {
    foodName: string;
    foodCalories: number;
    foodProtein: number;
    dispatch: React.Dispatch<[number,number]>;
}

interface FoodListProps {
    value: number;
    index: number;
    ingredients: {
        name: string;
        calories: number;
        protein: number;
    }[];
    dispatch: React.Dispatch<[number,number]>;
}

const FoodEntry: React.FC<FoodEntryProps> = ({
    foodName,
    foodCalories,
    foodProtein,
    dispatch,
}) => {
    const [currCount, setCount] = React.useState(0);
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCount(Number(event.target.value));
        dispatch([foodCalories * currCount, foodProtein * currCount]);
    }

    const plusButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        setCount(currCount + 1);
        dispatch([foodCalories,foodProtein]);
    }

    const minusButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (currCount > 0) {
            setCount(currCount - 1);
            dispatch([-1 * foodCalories, -1 * foodProtein]);
        }
    }

    return (
        <>
        <Grid item xs={8}>
            <Box display="flex" justifyContent="flex-start">
                <Typography>{foodName}: </Typography>
            </Box>
        </Grid>
        <Grid item xs={2}>
            <Input type="number"
                value={currCount}
                onChange={handleInputChange}
            />
        </Grid>
        <Grid item xs={1}>
            <Button
                onClick={plusButtonHandler}
            >
                <AddBoxIcon />
            </Button>
        </Grid>
        <Grid item xs={1}>
            <Button
                onClick={minusButtonHandler}
            >
                <IndeterminateCheckBoxIcon />
            </Button>
        </Grid>
        </>
    );
}

export const FoodList: React.FC<FoodListProps> = ({
    value,
    index,
    ingredients,
    dispatch,
 }) => {
    if (value === index) {
        return (
            <Grid container>
                {ingredients.map( (entry) => (
                    <FoodEntry 
                        key={entry.name} 
                        foodName={entry.name} 
                        foodCalories={entry.calories} 
                        foodProtein={entry.protein}
                        dispatch={dispatch}
                    />
                ))}
            </Grid>
        );
    } else {
        return null;
    }
}