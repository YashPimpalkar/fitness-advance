import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/Star';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import Navbar from '../components/Navbar'


// ... (rest of your imports)

const tiers = [
  {
    title: 'Basic',
    price: '200',
    description: [
      'Access to gym equipment',
      'Locker facilities',
      'Open gym time',
      'Fitness website included'
    ],
    buttonText: 'JOIN NOW',
    buttonVariant: 'outlined',
  },
  {
    title: 'Premium',
    subheader: 'Most popular',
    price: '400',
    description: [
      'Access to 20 gym Equipment',
      'Fitness classes included',
      '2 Free personal trainer sessions/month',
      'Fitness website included'
    ],
    buttonText: 'Upgrade',
    buttonVariant: 'contained',
  },
  {
    title: 'Super',
    price: '700',
    description: [
      'Access to Full gym Equipment',
      'Fitness Classes Included',
      '4 Free personal trainer sessions/member',
      'Fitness Website Included'
    ],
    buttonText: 'JOIN NOW',
    buttonVariant: 'outlined',
  },
];

// ... (rest of your existing code remains the same)




// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Pricing() {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <Navbar />
    <ThemeProvider  theme={defaultTheme} >
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
     
      {/* Hero unit */}
      <Container id='pricing'  disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          
          gutterBottom
        >
          Pricing
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          At [ Fitness-Club ], we believe that fitness isn't just a hobby-it's a lifestyle.
           But we also understand that everyone has their own pace, preferences,
            and budget. That's why we've designed a variety of membership plans 
            to suit every fitness enthusiast, whether you're a beginner or a seasoned athlete.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon/> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                     ₹{tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
      
         
       
      </Container>
      {/* End footer */}
    </ThemeProvider>
    </Box>
  );
}