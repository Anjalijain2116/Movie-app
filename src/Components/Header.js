import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useSelector} from "react-redux";
import {selectUser} from "../features/userSlice"
import './Header.css'
import { auth } from '../firebase';


function Header() {
    const history = useNavigate();
    const user = useSelector(selectUser);
    return (
        <div className="header">
            <span onClick={() => history.push('./')} style={{display:'flex',alignItems:'center',paddingLeft:'5px',marginTop:'10px'}}>
                <div ><img src="video-player.png" className="header__icon"/></div>
                <div className="header__text">BINGE IT</div>

            </span>
            <span style={{display:'flex',alignItems:'center',marginTop:'10px'}}>
                <h3 className="header__email">{user.email}</h3>
                <div style={{paddingRight:'10px'}}><button className="button_watch" onClick={()=>history.push('./watchlist')}>My Watchlist</button></div>
                <div style={{paddingRight:'10px'}} onClick={()=>auth.signOut()}><button className="button_logout">Logout</button></div>

            </span>
        </div>
    )
}

export default Header