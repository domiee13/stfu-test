import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ImageCard from './ImageCard.js'
const useStyles = makeStyles((theme)=>({
    root:{
        height:'100vh', 
        // backgroundImage:`url(${process.env.PUBLIC_URL + "/assets/bg1.png"})`,
        // backgroundSize:'cover'
        display: 'flex',
        justifyContent:'center',
        alignContent:'center'
    }
}));

export default function(){
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ImageCard/>
            <ImageCard/>
        </div>
    )
}