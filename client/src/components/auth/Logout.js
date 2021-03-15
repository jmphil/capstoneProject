import React from 'react';
// import { makeStyles } from '@material-ui/core';
import Page from 'src/styles/Page';
import { signout } from '../../actions/index'
import { useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     backgroundColor: theme.palette.background.dark,
//     height: '100%',
//     paddingBottom: theme.spacing(3),
//     paddingTop: theme.spacing(3)
//   }
// }));

const Signout = () => {

  // const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();


    
      dispatch(signout(()=>{
        console.log('pushing to another page');
        navigate('/login', { replace: true });
      }));
  
  
  

  return (
    <Page>
      
    </Page>
  );
};
export default Signout;
