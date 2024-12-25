import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h1" align="center">
        Welcome to My Next.js Project!
      </Typography>
      <Grid container spacing={2} justify="center">
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Feature 1
              </Typography>
              <Typography variant="body2">
                Description of feature 1.
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Feature 2
              </Typography>
              <Typography variant="body2">
                Description of feature 2.
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="secondary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
