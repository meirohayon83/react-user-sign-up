import React from 'react';
import Input from './Input';

import TextField from '@material-ui/core/TextField';



function FormikControl(props){
  
  const {control , ...rest} = props
  switch(control){
    case  'input':
       return <Input  {...rest} />
    
    default: return null


  }
}


export default FormikControl