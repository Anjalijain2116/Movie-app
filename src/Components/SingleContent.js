import { Badge } from "@material-ui/core";
import { img_300, unavailable } from "../Config";
import StarIcon from '@material-ui/icons/Star';
import AddIcon from '@material-ui/icons/Add';
import "./SingleContent.css";
import ContentModal from "./ContentModal";
import { db } from "../firebase";
import {useSelector} from "react-redux";
import {selectUser} from "../features/userSlice";


const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
const user = useSelector(selectUser);
  const addWatchlist = (e) =>{
    e.preventDefault();

  let docRef = db.collection("users").doc(user.uid).collection("watchlist").doc(id.toString())
  docRef.get().then((doc) => {
  if (!doc.exists) {
    docRef.set({
      id:id,
      poster:poster,
      title:title,
      date:date,
      media_type:media_type,
      vote_average:vote_average
    });
  }
});
    // db.collection("users").doc(user.uid).collection("watchlist").doc(id).set({
    //   id:id,
    //   poster:poster,
    //   title:title,
    //   date:date,
    //   media_type:media_type,
    //   vote_average:vote_average
    // });
  };

  return (
    // <ContentModal media_type={media_type} id={id}>
     <div className="media">
       <ContentModal media_type={media_type} id={id}>
         <img
        className="poster"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />
      </ContentModal>
    <span className="row1">
        <span className="rating">
            {/* <span style={{color:""}}><StarIcon/></span> */}
            <img src="star.png" height='20' width='20'  />
            <span style={{marginLeft:'5px'}}>{vote_average}</span>
        </span>
        <span>{media_type === "tv" ? "TV Series" : "Movie"} ({date? date.substring(0,4): "----"})</span>
    </span>
    <div className="button"><button className="wishlist" onClick={addWatchlist}><span><AddIcon/></span> <span style={{fontWeight:'600'}}>Watchlist</span> </button></div>
     </div>
      
    //   <b className="title">{title}</b>
    //   <span className="subTitle">
    //     {media_type === "tv" ? "TV Series" : "Movie"}
    //     <span className="subTitle">{date}</span>
    //   </span>
    // </ContentModal>
  );
};

export default SingleContent;