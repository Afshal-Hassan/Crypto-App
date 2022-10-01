import { Route } from '@mui/icons-material';
import { BrowserRouter } from 'react-router-dom';
import '../src/Components/App/App1.css'
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Route exact path="/" component={Home}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
