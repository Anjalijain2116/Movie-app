import React,{useEffect,useState} from 'react'
import SingleContentWatch from "./SingleContentWatch";
import { db } from '../firebase';
import {useSelector} from "react-redux";
import {selectUser} from "../features/userSlice"
import './Watchlist.css';

function Watchlist() {

    const user = useSelector(selectUser);
    const [array,setArray] = useState([]);
    useEffect(() => {
        db.collection("users").doc(user.uid).collection("watchlist").onSnapshot((snapshot)=>{
            let arr = snapshot.docs.map((doc)=>{
                return { ...doc.data() }
            })
            setArray(arr);
            console.log(arr);
        })
    }, [])

    return (
        <div>
           <span className="pageTitle">My Watchlist</span>
           <div className="trending">
        {array &&
          array.map((c) => (
            <SingleContentWatch
              key={c.id}
              id={c.id}
              poster={c.poster}
              title={c.title || c.name}
              date={c.date}
              media_type={c.media_type}
              vote_average={c.vote_average}
            />
          ))}
      </div>
        </div>
    )
}

export default Watchlist
