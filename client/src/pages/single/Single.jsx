import SidebarPost from "../../components/sidebar_post/Sidebar_post";
import SinglePost from "../../components/singlePost/SinglePost";
import "./single.css";


export default function Single() {
  return (

    <div className="single">
      <SinglePost />
      <SidebarPost />
    </div>
  
  );
}