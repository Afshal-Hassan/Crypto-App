import React from 'react'
import AppBar from '@mui/material/AppBar'
import {Container} from '@mui/material';
import '../Header/Header.css'
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import {MenuItem} from '@mui/material';
import {Select} from '@mui/material';
import {Toolbar} from '@mui/material';
import {Typography} from '@mui/material';
import {useHistory} from "react-router-dom";



function Header() {
    const history=useHistory();
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
                <Typography className="title" onClick={()=>{
                    history.push("/");
                }}>Crypto Coins</Typography>
                <Select variant='outlined' className='Select'>
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