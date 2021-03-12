import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import {
  Box,
  Button,
  // Checkbox,
  Container,
  FormHelperText,
  // Link,
  TextField,
  Typography,
  makeStyles
} from '@material-ui/core';
import Page from 'src/styles/Page';
import { setAssets } from '../../../actions/assetActions'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const AddAssetsView = () => {
  const classes = useStyles();
  // const [customers] = useState(data);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [checking, setChecking] = useState('');
  const [savings, setSavings] = useState('');
  const [investments, setInvestments] = useState('');
  const userId = useSelector((state) => state.auth.id);

  

  const handleSubmit = (e) => {
    
    e.preventDefault();

    // call action
    //pass the email address and password to our action
    //dispatch(sinup(), cb)

    dispatch(setAssets({
      userId: userId,
      checking: checking,
      savings: savings,
      investments: investments
    }, () =>{
      console.log('pushing to another page');
      navigate('/app/dashboard', { replace: true });
    }))



  }

  return (
    <Page
      className={classes.root}
      title="Register"
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              email: '',
              firstName: '',
              lastName: '',
              password: '',
              policy: false
            }}
           
            // onSubmit={(values) => {
            //   console.log(values)
            // }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              // handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box mb={3}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Add Assets Here
                  </Typography>
                  {/* <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Use your email to create new account
                  </Typography> */}
                </Box>
                <TextField
                  error={Boolean(touched.firstName && errors.firstName)}
                  fullWidth
                  helperText={touched.firstName && errors.firstName}
                  label="Checking"
                  margin="normal"
                  // name="firstName"
                  onBlur={handleBlur}
                  onChange={(e)=>setChecking(e.target.value)}
                  value={checking}
                  variant="outlined"
                  type="number"
                />
                <TextField
                  error={Boolean(touched.lastName && errors.lastName)}
                  fullWidth
                  helperText={touched.lastName && errors.lastName}
                  label="Savings"
                  margin="normal"
                  // name="lastName"
                  onBlur={handleBlur}
                  onChange={(e)=>setSavings(e.target.value)}
                  value={savings}
                  variant="outlined"
                  type="number"
                />
                <TextField
                  onChange={(e)=>setInvestments(e.target.value)} 
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Investments"
                  margin="normal"
                  // name="email"
                  onBlur={handleBlur}
                  type="number"
                  value={investments}
                  variant="outlined"
                />
                <Box
                  alignItems="center"
                  display="flex"
                  ml={-1}
                >
                  
                </Box>
                {Boolean(touched.policy && errors.policy) && (
                  <FormHelperText error>
                    {errors.policy}
                  </FormHelperText>
                )}
                <Box my={2}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Submit 
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </Page>
  );
};

export default AddAssetsView;
