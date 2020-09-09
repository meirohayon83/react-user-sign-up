import React , {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Formik ,Form} from 'formik';
import * as Yup from 'yup';
import FormikControl from '../components/FormikControl'

import axios from 'axios';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(4),
  },
  submit: {
    marginTop: theme.spacing(4),
  },
  mar:{
    marginTop: theme.spacing(5),
  }
}));

export default function Register() {

 
  const [confirm , setConfirm] = useState();



  const classes = useStyles();

   const initialValues = {
        name: '',
        userName: '',
        email: '',
        password:'',
         confirmPassword:''
        
    }
    const validationSchema = Yup.object({

        name:Yup.string().required('required').min(4).max(150),
        userName: Yup.string().required('required').min(3).max(20),
        email: Yup.string().required('required').email(),
        password: Yup.string().required('required').min(6).max(20),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Passwords must match')
         .required('Password confirm is required')
        
    })

    
 
     
     const onSubmit = values => {
         
        console.log('Form data' ,values);

           axios.post(`http://localhost:3334/register` , values)
           .then(res => {
             localStorage.setItem('token',res.data.token)
            console.log(res.data)
             setConfirm('go to your email address and confirm your registration')

            
       })
        .catch(err => {
          
          
        console.log(err.response.data);

      });


          
    }

    

  
  return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
       >
       { formik => { return(
           
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Form className={classes.form} noValidate>
          <Grid container spacing={1}>

            <Grid item xs={12} sm={12}>

                <FormikControl 
                  variant="outlined"
                  fullWidth
                  control= 'input'
                  type="text"
                  label="name"
                  name="name"
               />
            </Grid>

             <Grid item xs={12}>
                <FormikControl 
                  variant="outlined"
                  fullWidth
                  control= 'input'
                  type="text"
                  label="userName"
                  name="userName"
               />
            </Grid>





            <Grid item xs={12}>
           
                <FormikControl
                  variant="outlined"
                  fullWidth
                  control= 'input'
                  type="email"
                  label="email"
                  name="email"
                 
             />
            </Grid>
            
           
            

           
            
             
               <Grid item xs={12}>

                 <FormikControl
                  variant="outlined"
                  fullWidth
                  control= 'input'
                  type="password"
                  label="password"
                  name="password"
               />
            </Grid>

          

            <Grid item xs={12}>

                 <FormikControl
                  variant="outlined"
                  fullWidth
                  control= 'input'
                  type="password"
                  label="confirmPassword"
                  name="confirmPassword"
               />
            </Grid>


           </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
           
          >
            Sign Up
          </Button>
           
          
        </Form>
      </div>
     
    </Container>

       )}
       }
    </Formik>
  );
}