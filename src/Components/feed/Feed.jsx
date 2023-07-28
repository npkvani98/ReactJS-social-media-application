//import { useEffect, useState } from "react";
import Share from "../Share/Share";
 import Post from "../Post/Post";
import "./feed.css";
import { Posts } from "../../Dummydata";
//import axios from "axios";



export default function Feed() {
  //const [posts,setPosts] = useState([]);
  
  // useEffect(() => {
  //   const fetchPosts = async () =>{
  //   const res = await axios.get("posts/timeline/64a01a20a0cc17551fb816cb");
  //   setPosts(res.data)
  //   };
  //   fetchPosts();
  // }, []);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share/>
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
        </div>
        </div>
  );
        }