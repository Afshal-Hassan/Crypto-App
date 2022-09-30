import React from 'react'
import AppBar from '@mui/material/AppBar'
import { Container, createTheme, makeStyles, MenuItem, Select, ThemeProvider, Toolbar, Typography } from '@material-ui/core';
import {useHistory} from "react-router-dom";

const useStyles=makeStyles(()=>({
    title:{
        flex:1,
        color:"gold",
        fontFamily:"Montserrat",
        fontWeight:"bold",
        cursor:"pointer",
        
    }
}))

function Header() {
    const history=useHistory();
    const classes =useStyles();
    const darkTheme=createTheme({
        palette:{
            primary:{
                main:"#fff",
                
        },
        type:"dark"
        }
    })
  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar color='transparent' position='static'>
        <Container>
            <Toolbar>
                <Typography className={classes.title} onClick={()=>{
                    history.push("/");
                }}>Crypto Coins</Typography>
                <Select variant='outlined' style={{
                    width:100,height:40,marginRight:15
                }}>
                    <MenuItem value={"USD"}>USD</MenuItem>
                    <MenuItem value={"PKR"}>PKR</MenuItem>
                </Select>
            </Toolbar>

        </Container>

    </AppBar>
    </ThemeProvider>
  
  )
}

export default Header