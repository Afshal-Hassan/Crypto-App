import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { makeStyles } from '@mui/material';
const useStyles=makeStyles(()=>({
  App:{
    backgroundColor:"#14161a",
    color:"white",
    minHeight:"100vh"

  }
}))
function App() {
  const classes=useStyles();
  return (
    <div className={classes.App}>
      <Header/>
    </div>
  );
}

export default App;
