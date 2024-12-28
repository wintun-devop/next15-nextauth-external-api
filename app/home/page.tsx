'use client';
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActions, Button ,Paper,Box} from '@mui/material';
import { signOut } from 'next-auth/react'

export default function Home() {
  const handleLogout = () => { signOut({ callbackUrl: '/' }); };
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" align="center">
        Welcome to My Next.js Project!
      </Typography>
      <Grid container spacing={5} justifyContent="center">
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
        {/* <Paper
                  sx={{
                    alignSelf:"left",
                    padding: 3,
                    textAlign: "center",
                    borderRadius: 5,
                    border: 1,
                    borderColor: "#2EB3EC",
                    backgroundColor: "#fff",
                    width: { xs: 150 },
                  }}
                  elevation={3}
                >
                  <Box
                    sx={{
                      width: "100px",
                      height: "100px",
                      margin: "0 auto",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    component="img"
                    // src={icon.something}
                  />
          </Paper> */}
      </Grid>
      <Grid>
      <Button variant="contained" color="success" onClick={handleLogout} style={{ marginBottom: '20px' }}> Logout </Button>
      </Grid>
    </Container>
  );
}
