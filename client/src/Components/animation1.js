import React , {useEffect, useRef, useState} from 'react';
import {TweenMax, Power3} from 'gsap';
import {makeStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';

const useStyles= makeStyles((themes)=>({

    container:{
        textAlign:'center',
        marginTop:'100px'
    },
    s1:{
        width:'70px',
        height:'70px',
        margin:'auto',
        backgroundColor:'#c266ff',
        marginBottom:'20px',
        borderRadius:'100%',
        textAlign:'center'
    },
    s2:{
        width:'70px',
        height:'70px',
        margin:'auto',
        backgroundColor:'#9900cc',
        marginBottom:'20px',
        borderRadius:'100%',
        textAlign:'center'
    },
    s3:{
        width:'70px',
        height:'70px',
        margin:'auto',
        backgroundColor:'#6b00b3',
        marginBottom:'20px',
        borderRadius:'100%',
        textAlign:'center'
    },
    s4:{
        width:'70px',
        height:'70px',
        margin:'auto',
        backgroundColor:'#3d0066',
        marginBottom:'20px',
        borderRadius:'100%',
        textAlign:'center'
    },
    text:{
        margin:'auto',
        color:'white',
        paddingTop:'25%'

    }
}));

export default function Animation1 (props){
    const classes= useStyles();

    let m =useRef(null);
    let e =useRef(null);
    let r =useRef(null);
    let n =useRef(null);
    

    const [state, setState] =useState(false);

    const handleExpandm =()=>{
        TweenMax.to([m],.8, {width:'100px',height:'100px',ease:Power3.easeOut}) 
        setState(true)
    }
    const handleShrinkm =()=>{
        TweenMax.to([m],.8, {width:'70px',height:'70px',ease:Power3.easeOut}) 
        setState(false)
    }

    useEffect(()=>{
        TweenMax.staggerFrom([m,e,r,n], .8, {opacity:0,x:70, ease:Power3.easeOut}, .2)
    }, [])

    return(
        <Grid container xs={12} md={12}>
            <Grid item xs={12} md={4}></Grid>

            <Grid item xs={12} md={4} className={classes.container}>
                <div>
                    <div className={classes.s1} ref={el=>m=el} onClick={state !== true ? handleExpandm: handleShrinkm}>
                        <h1 className={classes.text}>M</h1>
                    </div>
                    <div className={classes.s2} ref={el=>e=el}>
                        <h1 className={classes.text}>E</h1>
                    </div>
                    <div className={classes.s3} ref={el=>r=el}>
                        <h1 className={classes.text}>R</h1>
                    </div>
                    <div className={classes.s4} ref={el=>n=el}>
                        <h1 className={classes.text}>N</h1>
                    </div>
                </div>
            </Grid>

            <Grid item xs={12} md={4}></Grid>
        </Grid>
    );
}