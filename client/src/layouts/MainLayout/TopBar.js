import React from 'react';
// import { useNavigate} from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  makeStyles
} from '@material-ui/core';
import Logo from 'src/styles/Logo';
// import { signout } from '../../actions/index';



const useStyles = makeStyles(({
  root: {},
  toolbar: {
    height: 64
  }
}));

const TopBar = ({ className, ...rest }) => {
  const classes = useStyles();
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

//   const logOut = () => {
    
//     dispatch(signout(()=>{
//       console.log('pushing to another page');
//       navigate('/', { replace: true });
//     }));
// }

  return (
    <AppBar
      className={clsx(classes.root, className)}
      elevation={0}
      {...rest}
    >
      <Toolbar className={classes.toolbar}>
        
          <Logo  />  
        
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string
};

export default TopBar;
