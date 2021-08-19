import "./write.css";
import TextField from '@material-ui/core/TextField';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import { useContext, useState } from "react";
import axios from "axios";
import {Context} from "../../context/Context";
import download from "../write/download.jpg";
  

export default function Write() {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const {user} = useContext(Context);

  const handleSubmit = async(e) => {
    e.preventDefault();
    const newPost = {
      username:user.username,
      title,
      desc,
    };
    if(file){
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        
      }
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {
      
    }
  }

  return (
    <div className="write">
      {
        <img
          className="writeImg"
          src= {file ? URL.createObjectURL(file) : download}
          alt=""
        />
      }
      
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i><AddOutlinedIcon className="writeIcon"/></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} onChange={(e)=> setFile(e.target.files[0])}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <TextField  className="writeInput" id="filled-basic" label="Title" variant="filled" onChange={(e)=> setTitle(e.target.value)}/>
        </div>
        <div className="writeFormGroup">
           <TextField
          id="filled-textarea"
          className="writeText"
          label="Tell your story...."
          placeholder="In a land far far away"
          multiline
          variant="filled"
          onChange={(e)=> setDesc(e.target.value)}
        />
        
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}