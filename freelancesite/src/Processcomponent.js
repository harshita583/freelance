import React from 'react'; // Add any other necessary import statements
import { Button } from '@material-ui/core';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Process from './Process'; // Import Process component
import Processsteps from './Processsteps';

function Processcomponent() {
  const isSmallScreen = window.innerWidth <= 600; // Define your breakpoint here
  return (
    <Container maxWidth="xl" style={{ background: '#F2E7D6', position: 'relative', padding: '2rem' }}>
      <Grid container spacing={6} alignContent="center" alignItems="center" justifyContent="center" style={{ position: 'relative' }}>
        <Grid item xs={12} sm={3}>
          <Process />
        </Grid>
        <Grid item xs={12} sm={9}>
          <Processsteps />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Processcomponent;
