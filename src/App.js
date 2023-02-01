import React,{useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {Container} from '@material-ui/core';
import Header from './Components/Header'
import SimpleBottomNavigation from './Components/MainNav'
import Trending from './Components/Trending'
import Movies from './Components/Movies'
import Series from './Components/Series'
import Search from './Components/Search'
import Watchlist from './Components/Watchlist'

import LoginScreen from './Components/LoginScreen'
import {useDispatch,useSelector} from "react-redux";
import { auth } from './firebase';
import {login,logout,selectUser} from "./features/userSlice";

console.log("Hii");
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(userAuth =>{
      if(userAuth){
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      }
      else{
        dispatch(logout());
      }
    });

    return unsubscribe;
  },[dispatch]);

  return (
    <BrowserRouter>
    {
      !user ? (
        <LoginScreen/>
      ):
      (<>
        <Header/>
    <div className="app" style={{paddingLeft:'15px',paddingRight:'15px'}}>
      {/* <Container > */}
        <Routes>
          <Route path='/' component={Trending} exact/>
          <Route path='/movies' component={Movies}/>
          <Route path='/series' component={Series}/>
          <Route path='/search' component={Search}/>
          <Route path='/watchlist' component={Watchlist}/>

        </Routes>
      {/* </Container> */}
      
    </div>
    <SimpleBottomNavigation/>
    </>
      ) 
    }
    
    </BrowserRouter>
  );
}

export default App;

