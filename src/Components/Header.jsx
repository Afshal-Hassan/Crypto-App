import React from 'react'
import AppBar from '@mui/material/AppBar'
import { makeStyles } from '@mui/styles';
import {Container} from '@mui/material';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import {MenuItem} from '@mui/material';
import {Select} from '@mui/material';
import {Toolbar} from '@mui/material';
import {Typography} from '@mui/material';
import {useHistory} from "react-router-dom";

const useStyles=makeStyles(()=>({
    title:{
        flex:1,
        color:"red",
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