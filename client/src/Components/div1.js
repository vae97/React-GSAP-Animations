import React ,{useRef} from 'react';
import {Grid,Paper} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';
import logo from '../Images/animation.svg';
import {TweenMax, power3} from 'gsap'

const useStyles= makeStyles((themes)=>({
    grid:{
        textAlign:'center',
        backgroundColor:'#ebccff'
    },
    item:{
        margin:'auto',
        height:'30px',
        width:'30px'
    }
}))

export default function Div1(){
    const classes =useStyles();

    return(
        <Grid container xs={12} md={12} className={classes.grid}>
            <Grid item xs={12} md={2}></Grid>
            <Grid item xs={12} md={8}>
                <img src={logo} width='200px' height='200px'></img>
            </Grid>
            <Grid item xs={12} md={2}></Grid>
        </Grid>
    );
}