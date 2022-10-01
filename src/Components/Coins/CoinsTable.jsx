import React, { useEffect, useState } from 'react'
import axios from "axios";
import { CoinList } from '../../Config/Api';
import { CryptoState } from '../../CryptoContext';
import { Container, LinearProgress, Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, ThemeProvider, Typography } from '@mui/material';
import { createTheme } from '@mui/material';
import '../Coins/CoinsTable.css'
import { useHistory } from 'react-router-dom';
import { numberWithCommas } from '../Banner/Carousel';

function CoinsTable() {
    const history=useHistory();
    const[coins,setCoins]=useState([]);
    const[loading,setLoading]=useState(false);
    const[page,setPage]=useState(1);
    const {currency,symbol}=CryptoState();
    const fetchCoins= async()=>{
        setLoading(true)
        const {data}= await axios.get(CoinList(currency));
        setCoins(data)
        setLoading(false)
    }
    useEffect(()=>{
        fetchCoins();
    },[currency])
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
        <Container style={{textAlign:"center"}}>
            <Typography variant='h4' className='Crypto-by-MarketCap' style={{marginTop:28}}>CryptoCurrency prices by Market Cap</Typography>
            <TableContainer style={{marginTop:34}}>
                {
                loading ? (
                    <LinearProgress style={{backgroundColor:"gold"}}/>
                ) :(
                    <>
                    <Table>
                        <TableHead style={{backgroundColor:"#EEBC1D"}} className="table-head">
                            <TableRow>
                                {["Coin","Price","24h Change","MarketCap"].map( (head) => (
                                    <TableCell
                                    style={{color:"black",fontWeight:"700"}}
                                    key={head}
                                    align={head==="Coin" ? "" :"right"}
                                    >
                                        {head}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {coins.slice((page-1)*10,(page-1)*10+10).map((row)=>{
                                const profit=row.price_change_percentage_24h > 0
                                return(
                                    <TableRow  onClick={()=> history.push(`/coins/${row.id}`)}
                                    key={row.name}
                                    style={{backgroundColor:"#16171a"}}
                                    className="Row-Body"
                                    >
                                        <TableCell component='th' scope='row' style={{
                                            display:"flex",
                                            gap:"15"
                                        }}>
                                            <div style={{display:"flex",flexDirection:"column"}}>
                                            <img 
                                            src={row?.image}
                                            alt={row.name}
                                            height="50"
                                            style={{marginBottom:10}}
                                            />
                                        <span style={{textTransform:"uppercase",fontSize:22,color:"white"}}>
                                            {row.symbol}
                                        </span>
                                        <span style={{color:"darkgrey"}}>{row.name}</span></div>
                                        </TableCell>
                                        <TableCell align='right' style={{color:"white"}}>
                                            {symbol}{" "}
                                            {numberWithCommas(row.current_price.toFixed(2))}
                                        </TableCell>
                                        <TableCell 
                                             align='right'
                                             style={{
                                                color: profit > 0 ? "rgb(14,203,129)":"red",
                                                fontWeight:500
                                             }}
                                        >
                                            {profit && "+"}
                                            {row.price_change_percentage_24h.toFixed(2)}%
                                        </TableCell>
                                        <TableCell
                                            align='right'
                                            style={{color:"white"}}
                                        >
                                            {symbol}{" "}
                                            {row.market_cap.toString().slice(0,-6)}
                                        </TableCell>

                                    </TableRow>
                                )
})}
                        </TableBody>
                    </Table>
                    </>
                )
                }
            </TableContainer>
            <Pagination
            style={{
                padding:20,
                width:"100%",
                display:"flex",
                justifyContent:"center"
            }}
            onChange={(_,value)=>{
                setPage(value);
                window.scroll(0,450);
            }}
            color="primary"
            variant='outlined'
        
                count={(coins?.length/10).toFixed(0)}
            />
        </Container>
    </ThemeProvider>
  )
}

export default CoinsTable