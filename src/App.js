import './App.css';
import{Navigation} from "./components/Header/Navigation"
import { BrowserRouter ,Routes ,Route } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Activities } from './components/Activities/Activities';
import { Home } from './components/Home/Home';
import { GroupList } from './components/GroupList/GroupList';
import { DetailsActivity } from './components/DetailsActivity/DetailsActivity';
import { CreateAcivity } from './components/CreateActivity/CreateActivity';
import { DetailsGroup } from './components/DetailsGroup/DetailsGroup';
import { Profile } from './components/Profile/Profile';
import { CreateGroup } from './components/CreateGroup/CreateGroup';
import { LoginPage } from './components/LoginPage/LoginPage';
import { RegisterPage } from './components/RegisterPage/RegisterPage';
import {AuthProvider } from './contexts/authContext';
import { Logout } from './components/Logout/Logout';

function App() {
  return (
    <>
 <BrowserRouter >
  <AuthProvider>
 <Navigation/>
 <Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/activities' element={<Activities />} />
  <Route path='/activities/create' element={<CreateAcivity /> } />
  <Route path='/activities/:activityId' element={<DetailsActivity />} />
  <Route path='/groups' element={<GroupList />} />
  <Route path='/groups/create' element={<CreateGroup />} />
  <Route path='/groups/:groupId' element={<DetailsGroup />} />
  <Route path='/profile/:profileId' element={<Profile />} />
  <Route path='/auth/login' element={<LoginPage />} />
  <Route path='/auth/register' element={<RegisterPage />} />
  <Route path='/auth/logout' element= { <Logout />} />
 </Routes>
 </AuthProvider>
 </BrowserRouter>
 <Footer/>
 </>
  );
}

export default App;
