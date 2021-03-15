import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  // Button,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
  makeStyles,
  // IconButton
} from '@material-ui/core';
import {
  Lock as LockIcon,
  // ShoppingBag as ShoppingBagIcon,
  // User as UserIcon,
  UserPlus as UserPlusIcon,
  // Users as UsersIcon,
} from 'react-feather';
import NavItem from './NavItem';
import HomeIcon from '@material-ui/icons/Home';
// import InputIcon from '@material-ui/icons/Input';
import AnnouncementIcon from '@material-ui/icons/Announcement';
// import { AnnouncementTwoTone } from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
import { useSelector } from 'react-redux';
// import { signout } from '../../../actions/index';



const user = {
  avatar: '',
  jobTitle: '',
  name: ''
};

const items = [
  {
    href: '/app/dashboard',
    icon: HomeIcon,
    title: 'Home'
  },
  {
    href: '/app/add-assets',
    icon: AddIcon,
    title: 'Add Assets'
  },
  {
    href: '/app/news',
    icon: AnnouncementIcon,
    title: 'Financial News'
  },
  // {
  //   href: '/app/account',
  //   icon: UserIcon,
  //   title: 'Account'
  // },
  {
    href: '/login',
    icon: LockIcon,
    title: 'Login'
  },
  {
    href: '/register',
    icon: UserPlusIcon,
    title: 'Register'
  },
  // {
  //   href: '/',
  //   icon: InputIcon,
  //   title: 'Logout',
    
  // },
];

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  }
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();
  const fName = useSelector(state => state.auth.firstName);
  const lName = useSelector(state => state.auth.lastName);
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
//   const logOut = () => {
    
//     dispatch(signout(()=>{
//       console.log('pushing to another page');
//       navigate('/', { replace: true });
//     }));
// }

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);


  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        p={2}
      >
        {/* will add avatar link in future feature */}
        <Avatar
          className={classes.avatar}
          // component={RouterLink}
          src={user.avatar}
          // to="/app/dashboard"
        />
        <Typography
          className={classes.name}
          color="textPrimary"
          variant="h5"
          placeholder="Username"
          
        >
          Welcome, {fName} {lName}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.jobTitle}
        </Typography>
      </Box>
      <Divider />
      <Box p={2}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
          {/* <RouterLink to="/login">
            <IconButton>
              <InputIcon onClick={logOut}/>
              Logout
            </IconButton>
          </RouterLink> */}
        </List>
      </Box>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false
};

export default NavBar;
