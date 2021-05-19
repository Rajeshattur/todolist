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
        height: '6em',
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center'

    },
    innerPortion2: {
        backgroundColor: 'grey',
        height: '6em',
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
    },
    innerPortion3: {
        backgroundColor: 'grey',
        height: '6em',
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
    },
})
const Layout = () => {
    const classes = useStyles();
    const cardArray=['1','2','3','4'];
    // const cardArray=[{id:'1',name:'rajesh',age:'18'},{id:'2',name:'ajesh',age:'14'},{id:'2',name:'ajesh',age:'14'}];
   
    return <div className={classes.root}>
        <div className={classes.head}></div>
        <div className={classes.formArea}>
            {
              cardArray.map((item)=><div className={classes.innerPortion1}><div>{item.name}</div> 
                <div>{item.age}</div></div>)} 
      </div>      
    </div>
}
export default Layout;