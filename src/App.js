import './App.css';
import{Navigation} from "./components/Navigation"
import {Home}  from './components/Home';
import { BrowserRouter ,Routes ,Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Activities } from './components/Activities';

function App() {
  return (
 <>
 <BrowserRouter >
 <Navigation/>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/activities' element={<Activities/>} />
 </Routes>
 </BrowserRouter>
 <Footer/>
 </>
  );
}

export default App;
