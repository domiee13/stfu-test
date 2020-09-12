import React, { Component } from 'react';
import {makeStyle, makeStyles, CssBaseline} from '@material-ui/core';
import Header from './components/Header';
import Product from './components/Product';

const useStyles = makeStyles((theme)=> ({
  root:{
    minHeight: '100vh',
    backgroundImage:`url(${process.env.PUBLIC_URL + "/assets/bgg.png"})`,
    backgroundRepeat: "no-repeat",
    // backgroundSize:"cover",
    backgroundSize:"100%"
  }
}));

export default function App(){
  const classes = useStyles();
  return <div className={classes.root}>
    <CssBaseline/>
    <Header/>
    <Product/>
  </div>;
}