import {HashRouter as Router, Route} from 'react-router-dom';

import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { Drawer, Button, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';


import './App.css';
import MovieList from '../MovieList/MovieList';
import Journal from '../Journal/Journal.jsx';
import AddEntry from '../AddEntry/AddEntry.jsx';
import Header from '../Header/Header.jsx';


const theme = createMuiTheme({
  palette: {
    
    type: "dark"

  }
  

})



function App() {


  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      
      
      <Router> 
      <Header />     
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page */}
        <Route path="/journal">
          <Journal />
        </Route>

        {/* Add Movie page */}
        <Route path="/add">
          <AddEntry />
        </Route>
      </Router>

    </div>
    </ThemeProvider>
  );
}


export default App;
