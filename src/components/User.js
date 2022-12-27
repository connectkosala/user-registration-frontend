import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));

export default function User() {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const [name,setName] = useState('')
    const [address,setAddress] = useState('')
    const [users,setUsers]=setState([])

    const handleClick=(ee)=>{
        e.preventDefault()
        const user={name,address}
        console.log(user)
        fetch("http://localhost:8080/user/add"),{
            method:"POST",
            Headers:{"Content-Type":"Application/json"},
            body:JSON.stringify(user)

        }.then(()=>{
            console.log("New User Added")
        })
    }

    const classes = useStyles();

    useEffect(()=>{
        fetch:("http://localhost/user/getAll")
        .then(res=>res.json())
        .then((result)=>{
            setUsers(result)
        }
        )
    },[])

  return (

    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}> <u>Add User</u></h1>
    <from className={classes.root} noValidate autoComplete="off">
    
    component="form"
    sx={{
      '& > :not(style)': { m: 1 },
    }}
    noValidate
    autoComplete="off"
  
    <TextField id="outlined-basic" label="User Name" variant="outlined" fullwidth 
    value={name}
    onChange={(e)=> setName(e.target.value)}
    />
    <TextField id="outlined-basic" label="User Address" variant="outlined" ullwidth 
    value={address}
    onChange={(e)=> setAddress(e.target.value)}
    />

    <Button variant="contained" onClick={handleClick} >Save</Button >


    </from>

   </Paper>
   <h1>Users</h1>
   <Paper elevation={3} style={paperStyle}>
    {users.map(user=>(
        <paper elevation={6} style={{margin:"10px",padding:"15px",textAlign:"left"}} key={user.id}>
            Id:{user.id}<br/>
            Name:{user.name}<br/>
            Address:{user.address}

        </paper>

        
    ))}
    </Paper>
    </Container>

  );
}
