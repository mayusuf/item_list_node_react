import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";

import Axios from 'axios'
import { API_URL} from '../constants/global'

function CreatePost() {

const [userName,setUserName] = useState("");
const [title,setTitle] = useState("");
const [text,setText] = useState("");

const submitPost = () => {
    Axios.post(API_URL+'create', {userName: userName, title: title, text:text})
}

    return (
        // <div className="CreatePost">
        //     <div className="uploadPost">
        //         <label>Username: </label>
        //         <input type="text" onChange={(e)=> {
        //             setUserName(e.target.value)
        //         }}/>
        //         <label>Title: </label>
        //         <input type="text" onChange={(e)=>{
        //             setTitle(e.target.value)
        //         }}/>

        //         <label>Post Text</label>
        //         <textarea onChange={(e)=>{
        //             setText(e.target.value)
        //         }}></textarea>

        //         <button onClick={submitPost}>Submit Post</button>
        //     </div>
        // </div>
        <Grid container alignItems="center" justify="center" direction="column">
            <Grid item>
                <TextField
                    id="name-input"
                    name="username"
                    label="Username"
                    type="text"
                    onChange={(e)=>{
                        setUserName(e.target.value)
                        }}
                />
            </Grid>
            <Grid item>
                <TextField
                    id="title-input"
                    name="title"
                    label="Title"
                    type="text"
                    onChange={(e)=>{
                        setTitle(e.target.value)
                        }}
                />
            </Grid>
            <Grid item>
                {/* <TextareaAutosize
                    id="text-input"
                    name="text"
                    label="Post Text"
                    
                    onChange={(e)=>{
                        setText(e.target.value)
                        }}
                /> */}
                <TextareaAutosize
                    name="text"
                    aria-label="Post Text"
                    minRows={7}
                    placeholder="Post Text Goes here"
                    style={{ width: 200 }}
                    onChange={(e)=>{
                        setText(e.target.value)
                        }}
                    />
            </Grid>
        </Grid>
    )}

export default CreatePost;