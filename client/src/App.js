import 'react-perfect-scrollbar/dist/css/styles.css';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/styles/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import routes from 'src/routes';
import {useSelector} from 'react-redux';


const App = () => {
  const { authenticated} = useSelector((state) => state.auth);
  console.log(authenticated);
  const routing = useRoutes(routes(authenticated));  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        
          {routing}
        
    </ThemeProvider>
  );
};

export default App;
