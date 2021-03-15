import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
// import { Pagination } from '@material-ui/lab';
import Page from 'src/styles/Page';
import Toolbar from './Toolbar';
import ProductCard from './ProductCard';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  productCard: {
    height: '100%'
  }
}));

const FinancialNews = () => {
  const classes = useStyles();
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const data = () => {

      const options = {
          method: 'GET',
          url: 'https://yahoo-finance-low-latency.p.rapidapi.com/v2/finance/news',
          params: {symbols: 'AAPL,MSFT,TSLA,AMD,AMZN,LULU,NFLX,GME'},
          headers: {
            'x-rapidapi-key': process.env.REACT_APP_API_KEY,
            'x-rapidapi-host': 'yahoo-finance-low-latency.p.rapidapi.com'
          }
        };
        
        axios.request(options).then(function (response) {
            setArticles(response.data.Content.result);
        }).catch(function (error) {
            console.error(error);
        });
      }
      data()
  }, [])
  console.log(articles);
  return (
    <Page
      className={classes.root}
      title="News"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Grid
            container
            spacing={3}
          >
            {articles.map((product) => (
              <Grid
                item
                key={product.id}
                lg={4}
                md={6}
                xs={12}
              >
                <ProductCard
                  className={classes.productCard}
                  product={product}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          mt={3}
          display="flex"
          justifyContent="center"
        >
          {/* <Pagination
            color="primary"
            count={3}
            size="small"
          /> */}
        </Box>
      </Container>
    </Page>
  );
};

export default FinancialNews;
