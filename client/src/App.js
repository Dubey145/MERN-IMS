import logo from './logo.svg';
import './App.css';
import {AppBar, Typography, Grow, Grid, Container} from '@material-ui/core';
import showInventory from './components/showInventory/showInventory.js';
import createInventory from './components/createInventory/createInventory.js';
import useStyles from './styles.js';


function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color = "inherit">
          <Typography className={classes.heading} variant="h2" align= "center">Inventory Management</Typography>
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify = "space-between" alignItems = "strect">
              <Grid item xs = {12} sm = {7}>
                <AppBar className={classes.appBar} position="static" color = "inherit">
                  <showInventory/>  
                </AppBar>
              </Grid> 
              <Grid item xs = {12} sm = {4}>
              <AppBar className={classes.appBar} position="static" color = "inherit">
                  <createInventory/>
                </AppBar>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default App;
