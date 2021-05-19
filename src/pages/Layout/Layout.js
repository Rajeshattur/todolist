import React, { useEffect, useState } from 'react'
import { Button, makeStyles, Paper, TextField } from '@material-ui/core';
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
        padding: '2em'
    },

    innerPortion1: {
        height: '6em',
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'

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
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const addTodo = () => {
        let formData = {
            title: title,
            description: description,
        }
        setCardArray([...cardArray,formData]);
        console.log(formData);
    }
    const deleteHandler = (index) => {
        let tempCardArray=cardArray;
        tempCardArray.splice(index,1);
        setCardArray(tempCardArray)
    }
    const changeTitle = (e) => { setTitle(e.target.value) }
    const changeDescription = (e) => { setDescription(e.target.value) }
    const [cardArray,setCardArray]=useState([]);
    useEffect(()=>{},[cardArray]);
    // const cardArray=[{id:'1',name:'rajesh',age:'18'},{id:'2',name:'ajesh',age:'14'},{id:'2',name:'ajesh',age:'14'}];

    return <div className={classes.root}>
        <div className={classes.head}>
            <TextField id="standard-basic" label="Title" onChange={changeTitle}>Title</TextField>
            <TextField id="standard-basic" label="Description" onChange={changeDescription}>Description</TextField>
            <Button variant="contained" color="primary" onClick={addTodo}>ADD</Button></div>
        <div className={classes.formArea}>
            {
                cardArray.map((item,index) => <Paper className={classes.innerPortion1}><div>{item.title}</div>
                    <div>{item.description}</div><Button variant="contained" color="primary" onClick={()=>deleteHandler(index)}>DELETE</Button></Paper>)}
        </div>
    </div>
}
export default Layout;