import "./profile.css";
import Topbar from "../../Components/topbar/Topbar";
import Sidebar from "../../Components/sidebar/Sidebar";
import Feed from "../../Components/feed/Feed";
import Rightbar from "../../Components/rightbar/Rightbar";

export default function Profile() {
     //const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
        <Topbar/>
        <div className="profile">
        <Sidebar/>
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                <img className="profileCoverImg" src= "assets/post 3.jpeg"
                alt=""/>
                <img className="profileUserImg" src="assets/person 7.jpeg"
                alt=""/>
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Sarah</h4>
                <span className="profileInfoDesc">Hi Friends!</span>

            </div>
            </div>
            <div className="profileRightBottom">
        <Feed/>
        <Rightbar profile/>
        </div>
        </div>
        </div>
        </>
  );
}
