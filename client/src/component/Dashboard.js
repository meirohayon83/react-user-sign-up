
import React ,{useEffect , useMemo , useState , useContext} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


import Register from './register';

import {BrowserRouter as Router, Switch ,Route ,Link} from "react-router-dom";

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import axios from 'axios';

const token = localStorage.getItem('token')



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
     user: {
      flexGrow: 10,
    },
  }),
);

export default function Dashboard() {

  
  
      
  const classes = useStyles();



   const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };





  return (
     
 <div className={classes.root}>

 
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          
            <MenuIcon />
          </IconButton>
         
         <Typography variant="h6" className={classes.user}> 

      
             </Typography> 

          

          <Button color="inherit"> <Link to="/Register">register</Link></Button> 
      
         
         
         
           

          

          
          
        </Toolbar>
      </AppBar>

      

 

      </div>

      

      
 );
}