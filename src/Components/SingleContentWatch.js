import { Badge } from "@material-ui/core";
import { img_300, unavailable } from "../Config";
import StarIcon from '@material-ui/icons/Star';
import AddIcon from '@material-ui/icons/Add';
import "./SingleContentWatch.css";
import ContentModal from "./ContentModal";
import { db } from "../firebase";
import {useSelector} from "react-redux";
import {selectUser} from "../features/userSlice";


const SingleContentWatch = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
const user = useSelector(selectUser);
const handleRemove = (e) =>{
  e.preventDefault();

   db.collection("users").doc(user.uid).collection("watchlist").doc(id.toString()).delete();
}
  return (
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
    <div className="button"><button className="wishlist1" onClick={handleRemove}><span style={{fontWeight:'600'}}>Remove</span> </button></div>
     </div>
      
   
  );
};

export default SingleContentWatch;