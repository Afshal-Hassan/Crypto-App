import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import {Container} from '@mui/material';
import './Header.css'
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import {MenuItem} from '@mui/material';
import {Select} from '@mui/material';
import {Toolbar} from '@mui/material';
import {Typography} from '@mui/material';
import {useHistory} from "react-router-dom";
import  { CryptoState } from '../../CryptoContext';



function Header() {
    const history=useHistory();
    const {currency,setCurrency}=CryptoState();
    const handleSelect=(event)=>{
        setCurrency(event.target.value);
    }
    const darkTheme=createTheme({
        palette:{
            primary:{
                main:"#fff",        
        },
        type:"dark",
        }
    })
  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar color='transparent' position='static'>
        <Container>
            <Toolbar>
                <Typography className="title" onClick={()=>{
                    history.push("/");
                }}  variant="h6">Crypto Coins</Typography>
                <Select variant='outlined' className='Select' value={currency} onChange={handleSelect} style={{
                    color:"white"
                }}>
                    <MenuItem value={"USD"} className="Menu-Item">USD</MenuItem>
                    <MenuItem value={"PKR"} className="Menu-Item">PKR</MenuItem>
                </Select>
            </Toolbar>

        </Container>

    </AppBar>
    </ThemeProvider>
  
  )
}

export default Header