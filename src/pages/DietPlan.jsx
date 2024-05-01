import React from 'react';
import { Typography, Box, Grid, Paper, Divider, Card, CardMedia, CardContent } from '@mui/material';
import { Fastfood, Restaurant, LocalDining } from '@mui/icons-material';
import Navbar from '../components/Navbar';
import oatmeal from "../assets/images/oat.jpeg";
import greekyoughurt from "../assets/images/greekyoghurt.jpg";
import avacado from "../assets/images/avacado.jpg";
import eggvegetable from "../assets/images/eggvegetable.jpg";
import chickensalad from "../assets/images/chickensalad.jpg";
import quinoa from "../assets/images/quinoa.jpg";
import turkeysandwich from "../assets/images/turkeysandwich.jpg";
import tofu from "../assets/images/tofu.jpg";
import salmon from "../assets/images/salmon.jpg";
import pasta from "../assets/images/pasta.jpg";
import sweetpotato from "../assets/images/sweetpotato.jpg";
import curry from "../assets/images/curry.jpg";
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const DietPlan = () => {


  const mealPlan = [
    {
      category: 'Breakfast',
      foods: [
        { name: 'Oatmeal', calories: 300, protein: '10g', carbs: '50g', fiber: '5g', image: oatmeal },
        { name: 'Greek Yogurt with Berries', calories: 250, protein: '15g', carbs: '30g', fiber: '3g', image: greekyoughurt },
        { name: 'Avocado Toast', calories: 350, protein: '8g', carbs: '40g', fiber: '7g', image: avacado },
        { name: 'Egg and Vegetable Scramble', calories: 400, protein: '20g', carbs: '25g', fiber: '4g', image: eggvegetable },
      ],
    },
    {
      category: 'Lunch',
      foods: [
        { name: 'Grilled Chicken Salad', calories: 500, protein: '30g', carbs: '20g', fiber: '6g', image: chickensalad },
        { name: 'Quinoa Bowl with Veggies', calories: 450, protein: '12g', carbs: '55g', fiber: '8g', image: quinoa },
        { name: 'Turkey Sandwich', calories: 400, protein: '25g', carbs: '35g', fiber: '4g', image: turkeysandwich },
        { name: 'Vegetable Stir-Fry with Tofu', calories: 350, protein: '18g', carbs: '40g', fiber: '5g', image: tofu },
      ],
    },
    {
      category: 'Dinner',
      foods: [
        { name: 'Salmon with Asparagus', calories: 600, protein: '35g', carbs: '15g', fiber: '4g', image: salmon },
        { name: 'Whole Wheat Pasta with Marinara', calories: 450, protein: '10g', carbs: '70g', fiber: '5g', image: pasta },
        { name: 'Steak with Sweet Potato', calories: 700, protein: '40g', carbs: '30g', fiber: '6g', image: sweetpotato },
        { name: 'Vegetable Curry with Brown Rice', calories: 500, protein: '15g', carbs: '60g', fiber: '7g', image: curry },
      ],
    },
  ];

  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <Navbar />
      <Box sx={{ mt: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Daily Diet Plan
        </Typography>
        <Divider />
        <Grid container spacing={3} sx={{ mt: 3 }}>
          {mealPlan.map((category, index) => (
            <Grid item xs={12} key={index}>
              <Typography variant="h5" gutterBottom>
                {category.category}
              </Typography>
              <Grid container spacing={2}>
                {category.foods.map((food, foodIndex) => (
                  <Grid item xs={12} sm={6} md={3} key={foodIndex}>
                    <Card elevation={3}>
                      <CardMedia
                        component="img"
                        height="200"
                        image={food.image}
                        alt={food.name}
                      />
                      <CardContent>
                        <Typography variant="subtitle1" gutterBottom>
                          {food.name}
                        </Typography>
                        <Grid container spacing={1}>
                          <Grid item xs={6}>
                            <Typography variant="body2">
                              Calories: {food.calories}
                              <br />
                              Protein: {food.protein}
                            </Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography variant="body2">
                              Carbs: {food.carbs}
                              <br />
                              Fiber: {food.fiber}
                            </Typography>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default DietPlan;
