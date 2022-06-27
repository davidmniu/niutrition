import React from 'react';
import './App.css';
import { TabMenu } from './components/tabMenu';
import { Grid } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        style={{ 
          minHeight: '100vh',
         }}
      >
        <TabMenu /> 
      </Grid>
    </div>
  );
}

export default App;
