import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import { signout } from '../../actions/index'
import { useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Signout = () => {

  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    
      dispatch(signout(()=>{
        console.log('pushing to another page');
        navigate('/login', { replace: true });
      }));
  }
  

  return (
    <Page>
      <div style={{ height: '100vh' }} className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-white">Goodbye</h1>
          <h3 className="text-warning">...sorry to see you go!</h3>
            <h5 className="text-info">This page should log the user out of the application by clearing the local storage and the redux store.</h5>
      </div>
    </Page>
  );
};
export default Signout;
