import React from 'react';
import { Typography, Box, Grid, Paper, Divider, Card, CardMedia, CardContent } from '@mui/material';
import { Fastfood, Restaurant, LocalDining } from '@mui/icons-material';
import oatmeal from "../assets/images/oatmeal.jpg"
import Navbar from '../components/Navbar'

const DietPlan = () => {
  const mealPlan = [
    {
      category: 'Breakfast',
      foods: [
        { name: 'Oatmeal', calories: 300, protein: '10g', carbs: '50g', fiber: '5g', image: oatmeal },
        { name: 'Greek Yogurt with Berries', calories: 250, protein: '15g', carbs: '30g', fiber: '3g', image: '/images/yogurt.jpg' },
        { name: 'Avocado Toast', calories: 350, protein: '8g', carbs: '40g', fiber: '7g', image: '/images/avocado_toast.jpg' },
        { name: 'Egg and Vegetable Scramble', calories: 400, protein: '20g', carbs: '25g', fiber: '4g', image: '/images/scramble.jpg' },
      ],
    },
    {
      category: 'Lunch',
      foods: [
        // { name: 'Grilled Chicken Salad', calories: 500, protein: '30g', carbs: '20g', fiber: '6g', image: '/images/salad.jpg' },
        // { name: 'Quinoa Bowl with Veggies', calories: 450, protein: '12g', carbs: '55g', fiber: '8g', image: '/images/quinoa_bowl.jpg' },
        // { name: 'Turkey Sandwich', calories: 400, protein: '25g', carbs: '35g', fiber: '4g', image: '/images/turkey_sandwich.jpg' },
        // { name: 'Vegetable Stir-Fry with Tofu', calories: 350, protein: '18g', carbs: '40g', fiber: '5g', image: '/images/stir_fry.jpg' },
      ],
    },
    {
      category: 'Dinner',
      foods: [
        // { name: 'Salmon with Asparagus', calories: 600, protein: '35g', carbs: '15g', fiber: '4g', image: '/images/salmon.jpg' },
        // { name: 'Whole Wheat Pasta with Marinara', calories: 450, protein: '10g', carbs: '70g', fiber: '5g', image: '/images/pasta.jpg' },
        // { name: 'Steak with Sweet Potato', calories: 700, protein: '40g', carbs: '30g', fiber: '6g', image: '/images/steak.jpg' },
        // { name: 'Vegetable Curry with Brown Rice', calories: 500, protein: '15g', carbs: '60g', fiber: '7g', image: '/images/curry.jpg' },
      ],
    },
  ];

  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
        <Navbar />
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="20px">
    
    <Box mt={3}>
      <Typography variant="h4" align="center" gutterBottom>
        Daily Diet Plan
      </Typography>
      <Divider />
      <Grid container spacing={3} mt={3}>
        {mealPlan.map((category, index) => (
          <Grid item xs={12} key={index}>
            <Typography variant="h5" gutterBottom>
              {category.category}
            </Typography>
            <Grid container spacing={3}>
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
                      <Typography variant="body2">
                        Calories: {food.calories}
                        <br />
                        Protein: {food.protein}
                        <br />
                        Carbs: {food.carbs}
                        <br />
                        Fiber: {food.fiber}
                      </Typography>
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
    </Box>
  );
};

export default DietPlan;
