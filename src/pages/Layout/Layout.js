import React from 'react'
import { makeStyles } from '@material-ui/core';
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
        height: '55%',
        width: '25em',
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent: 'center',
    },
    innerPortion1: {
        backgroundColor: 'aliceblue',
        height: '20%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    innerPortion2: {
        backgroundColor: 'aliceblue',
        height: '20%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    innerPortion3: {
        backgroundColor: 'aliceblue',
        height: '20%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
})
const Layout = () => {
    const classes = useStyles();
    return <div className={classes.root}>
        <div className={classes.formArea}>
            <div classname={classes.innerPortion1}>
            </div>
            <div classname={classes.innerPortion2}>
            </div>
            <div classname={classes.innerPortion3}>
            </div>
        </div>
    </div>
}
export default Layout;