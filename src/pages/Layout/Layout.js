import React from 'react'
import {makeStyles} from '@material-ui/core';
const useStyles = makeStyles({
    root: {
        backgroundColor: '#e8471c',
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'


    },
    head: {
        backgroundColor: '#40b2e4',
        height: '15%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-end'
       

    },
    formArea: {
        backgroundColor: 'white',
        height: '100%',
        width: '50em',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding:'2em'
    },

    innerPortion1: {
        backgroundColor: 'grey',
        height: '65%',
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        margin:'2em'

    },
    innerPortion2: {
        backgroundColor: 'grey',
        height: '65%',
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        margin:'2em'
    },
    innerPortion3: {
        backgroundColor: 'grey',
        height: '65%',
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        margin:'2em'
    },
})
const Layout = () => {
    const classes = useStyles();
    return <div className={classes.root}>
        <div className={classes.head}></div>
        <div className={classes.formArea}>
            <div className={classes.innerPortion1}></div>
            <div className={classes.innerPortion2}></div>
            <div className={classes.innerPortion3}></div>
        </div>
    </div>
}
export default Layout;