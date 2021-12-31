import React, { useContext, useEffect, useReducer } from 'react';
import dynamic from 'next/dynamic';
import Layout from '../../components/Layout';
import { Store } from '../../utils/Store';
import NextLink from 'next/link';
import Image from 'next/image';
import {
  Grid,
  TableContainer,
  Table,
  Typography,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Link,
  CircularProgress,
  Button,
  Card,
  List,
  ListItem,
} from '@mui/material';
import axios from 'axios';
import classes from '../../utils/classes';
import { useSnackbar } from 'notistack';
import { getError } from '../../utils/error';

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        orderNoLogin: action.payload,
        error: '',
      };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    case 'DELIVER_REQUEST':
      return { ...state, loadingDeliver: true };
    case 'DELIVER_SUCCESS':
      return { ...state, loadingDeliver: false, successDeliver: true };
    case 'DELIVER_FAIL':
      return { ...state, loadingDeliver: false, errorDeliver: action.payload };
    case 'DELIVER_RESET':
      return {
        ...state,
        loadingDeliver: false,
        successDeliver: false,
        errorDeliver: '',
      };
    default:
      state;
  }
}

function OrderNoLogin({ params }) {
  const orderNoLoginId = params.id;

  const { state } = useContext(Store);
  const { userInfo, isAdmin } = state;
  const [
    { loading, error, orderNoLogin, loadingDeliver, successDeliver },
    dispatch,
  ] = useReducer(reducer, {
    loading: true,
    orderNoLogin: {},
    error: '',
  });
  const {
    shippingAddressNoLogin,
    orderNoLoginItems,
    isDelivered,
    deliveredAt,
  } = orderNoLogin;

  useEffect(() => {
    const fetchOrderNoLogin = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(
          `/api/orderNoLogins/${orderNoLoginId}`
        );
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };
    if (
      !orderNoLogin._id ||
      successDeliver ||
      (orderNoLogin._id && orderNoLogin._id !== orderNoLoginId)
    ) {
      fetchOrderNoLogin();
      if (successDeliver) {
        dispatch({ type: 'DELIVER_RESET' });
      }
    }
  }, [orderNoLogin, successDeliver]);

  const { enqueueSnackbar } = useSnackbar();

  async function deliverOrderNoLoginHandler() {
    try {
      dispatch({ type: 'DELIVER_REQUEST' });
      const { data } = await axios.put(
        `/api/orderNoLogins/${orderNoLogin._id}/deliver`,
        {}
      );
      dispatch({ type: 'DELIVER_SUCCESS', payload: data });
      enqueueSnackbar('Order is delivered', { variant: 'success' });
    } catch (err) {
      dispatch({ type: 'DELIVER_FAIL', payload: getError(err) });
      enqueueSnackbar(getError(err), { variant: 'error' });
    }
  }

  return (
    <Layout title={`Order ${orderNoLoginId}`}>
      <Typography component="h1" variant="h1">
        Request ID {orderNoLoginId}
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography sx={classes.error}>{error}</Typography>
      ) : (
        <Grid container spacing={1}>
          <Grid item md={9} xs={12}>
            <Card sx={classes.section}>
              <List>
                <ListItem>
                  <Typography component="h2" variant="h2">
                    Project Address
                  </Typography>
                </ListItem>
                <ListItem>Name: {shippingAddressNoLogin.fullName}, </ListItem>
                <ListItem>Email: {shippingAddressNoLogin.email}</ListItem>
                <ListItem>Phone: {shippingAddressNoLogin.phone}</ListItem>
                <ListItem>
                  Project Address: {shippingAddressNoLogin.address},{' '}
                  {shippingAddressNoLogin.city},{' '}
                  {shippingAddressNoLogin.postalCode},{' '}
                  {shippingAddressNoLogin.country}
                </ListItem>
                <ListItem>
                  Status:{' '}
                  {isDelivered ? `quoted at ${deliveredAt}` : 'not quoted'}
                </ListItem>
              </List>
            </Card>
            <Card sx={classes.section}>
              <List>
                <ListItem>
                  <Typography component="h2" variant="h2">
                    Project Information Detail
                  </Typography>
                </ListItem>
                <ListItem>{shippingAddressNoLogin.projectInformation}</ListItem>
              </List>
            </Card>
            <Card sx={classes.section}>
              <List>
                <ListItem>
                  <Typography component="h2" variant="h2">
                    Requested Items to Get Quote
                  </Typography>
                </ListItem>
                <ListItem>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Image</TableCell>
                          <TableCell>Name</TableCell>
                          <TableCell align="right">Category</TableCell>
                          <TableCell align="right">Brand</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {orderNoLoginItems.map((item) => (
                          <TableRow key={item._id}>
                            <TableCell>
                              <NextLink href={`/product/${item.slug}`} passHref>
                                <Link>
                                  <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={50}
                                    height={50}
                                  ></Image>
                                </Link>
                              </NextLink>
                            </TableCell>

                            <TableCell>
                              <NextLink href={`/product/${item.slug}`} passHref>
                                <Link>
                                  <Typography>{item.name}</Typography>
                                </Link>
                              </NextLink>
                            </TableCell>
                            <TableCell align="right">
                              <Typography>{item.category}</Typography>
                            </TableCell>
                            <TableCell align="right">
                              <Typography>{item.brand}</Typography>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </ListItem>
              </List>
            </Card>
          </Grid>
          <Grid item md={3} xs={12}>
            <Card sx={classes.section}>
              <List>
                <ListItem>
                  <Typography variant="h2">
                    {' '}
                    Thank you. We will send you quoted price soon.
                  </Typography>
                </ListItem>
                <ListItem>
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography></Typography>
                    </Grid>
                  </Grid>
                </ListItem>

                {isAdmin && !orderNoLogin.isDelivered ? (
                  <ListItem>
                    {loadingDeliver && <CircularProgress />}
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      onClick={deliverOrderNoLoginHandler}
                    >
                      Deliver Order
                    </Button>
                  </ListItem>
                ) : null}
              </List>
            </Card>
          </Grid>
        </Grid>
      )}
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  return { props: { params } };
}

export default dynamic(() => Promise.resolve(OrderNoLogin), { ssr: false });