import React from 'react'
import {makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
    root: {
        backgroundColor: 'cadetblue',
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    formArea: {
        backgroundColor: 'aliceblue',
        height: '35%',
        width: '15em',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        borderRadius: '2em',
        padding:'2em'
    },
})

const Landingpage=()=>{
    const classes = useStyles();
   return <div className={classes.root}>
   <div className={classes.formArea}>

   </div> 
   </div>
}
export default Landingpage;