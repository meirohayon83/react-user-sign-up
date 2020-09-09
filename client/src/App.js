
import React  from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

 import {useParams , useRouteMatch} from 'react-router-dom'

 import Register from './component/register';

 import Dashboard from './component/Dashboard';

 
 import {BrowserRouter as Router, Switch ,Route ,Link , withRouter} from "react-router-dom";



 

export default function App() {


 
   
  return (

    
      <Router>

  
    <div>
     
       
         <Dashboard />
         
        <Switch>

            
           {/* <Route exact path="/Dashboard" component={Dashboard}/> */}
          
           <Route  path="/register" component = {Register} />
          
          
          
          
      
        </Switch>

    
   </div>
   
         </Router>
          

  
   );
}










