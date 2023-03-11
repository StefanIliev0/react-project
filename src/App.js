import './App.css';
import{Navigation} from "./components/Navigation"
import {Home}  from './components/Home';
import { BrowserRouter ,Routes ,Route } from 'react-router-dom';

function App() {
  return (
 <>
 <BrowserRouter>
 <Navigation/>
 <Routes>
  <Route path='/' element={<Home/>}/>
 </Routes>
 </BrowserRouter>
 <h1>Lets Begin</h1>
 </>
  );
}

export default App;
