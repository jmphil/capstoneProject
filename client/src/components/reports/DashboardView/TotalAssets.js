import React from 'react';
import { useSelector } from 'react-redux'
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  colors,
  makeStyles,
  useTheme
} from '@material-ui/core';
import AttachMoney from '@material-ui/icons/AttachMoney';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';


const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  }
}));

const TotalAssets = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();
  const {investments, checking, savings} = useSelector((state) => state.assets);
  const data = {
    datasets: [
      {
        data: [investments, checking, savings],
        backgroundColor: [
          colors.indigo[500],
          colors.red[600],
          colors.orange[600]
        ],
        borderWidth: 8,
        borderColor: colors.common.white,
        hoverBorderColor: colors.common.white
      }
    ],
    labels: ['Investments', 'Checking', 'Savings']
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.default,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  const money = [
    {
      title: 'Invetments',
      value: investments,
      icon: ShowChartIcon,
      color: colors.indigo[500]
    },
    {
      title: 'Checking',
      value: checking,
      icon: AccountBalanceIcon,
      color: colors.red[600]
    },
    {
      title: 'Savings',
      value: savings,
      icon: AttachMoney,
      color: colors.orange[600]
    }
  ];

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader title="Total Assets" />
      <Divider />
      <CardContent>
        <Box
          height={300}
          position="relative"
        >
          <Doughnut
            data={data}
            options={options}
          />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          mt={2}
        >
          {money.map(({
            color,
            icon: Icon,
            title,
            value
          }) => (
            <Box
              key={title}
              p={1}
              textAlign="center"
            >
              <Icon color="action" />
              <Typography
                color="textPrimary"
                variant="body1"
              >
                {title}
              </Typography>
              <Typography
                style={{ color }}
                variant="h2"
              >
                {value}
                %
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

TotalAssets.propTypes = {
  className: PropTypes.string
};

export default TotalAssets;
