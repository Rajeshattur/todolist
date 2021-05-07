import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { Button, makeStyles } from '@material-ui/core';
const useStyles=makeStyles({
    root: {backgroundColor:'cadetblue',
    height:'100%',
width:'100%',
display:'flex',
flexDirection:'column',
alignItems:'center',
justifyContent:'center'},
formArea: {backgroundColor:'aliceblue',
height:'45%',
width:'25%',
display:'flex',
flexDirection:'column',
justifyContent:'space-around',
padding:'2em',
borderRadius:'2em'},
formArea1: {backgroundColor:'aliceblue',
height:'20%',
width:'100%',
display:'flex',
flexDirection:'row',
justifyContent:'space-around',
padding:'2em'},

formArea3: {backgroundColor:'aliceblue',
height:'10%',
width:'100%',
display:'flex',
flexDirection:'row',
justifyContent:'space-around',
padding:'2em'},
size: {width:'10em',
height:'2em',
display:'flex',
alignItems:'center',
justifyContent:'center',
}
})
const Home=()=>{

    const classes=useStyles();  
     const [name,setName]=useState('');
    const [user,setUser]=useState('');
    const [password,setPassword]=useState('');
    const [email,setEmail]=useState('');
    const submitHandler=()=>{
    const formData={name:name,
    userName:user,
    password:password,
    email:email
}
console.log(formData);
    }
    const changeName=(e)=>{setName(e.target.value)}
    const changeUser=(e)=>{setUser(e.target.value)}
    const changePassword=(e)=>{setPassword(e.target.value)}
    const changeEmail=(e)=>{setEmail(e.target.value)}

    return <div className={classes.root}> 
      <div className={classes.formArea}>
          <div className={classes.formArea3}>
      <TextField id="standard-basic" label="name" onChange={changeName}>Name</TextField>
       <TextField id="standard-basic" label="username" onChange={changeUser}>Username</TextField>
      </div>
      <div className={classes.formArea1}>
      <TextField id="standard-basic" label="password" onChange={changePassword}>Password</TextField>
       <TextField id="standard-basic" label="email" onChange={changeEmail}>Email</TextField>
       </div>
       <div className={classes.formArea2}>
       <Button className={classes.size} variant="contained" color="secondary" onClick={submitHandler}>submit</Button>
       </div>
       </div>
    </div>
}
export default Home;