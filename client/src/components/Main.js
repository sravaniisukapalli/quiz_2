import '../styles/Main.css';
import React,{ useRef} from 'react'
import { TextField,MenuItem, Button} from "@material-ui/core";
import { useDispatch } from 'react-redux';
import { setUserId } from '../redux/result_reducer';
import { useState} from "react";
 import  {Categories} from '../database/data';
 import { useNavigate } from 'react-router-dom';
// import Categories from "../components/Categories";
export default function Main(){
   
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

    // const [category, setCategory] = useState("");
    const inputRef = useRef(null)
    const dispatch=useDispatch()
    function startQuiz(){
      navigate(`last/${selectedCategory}`)
        if(inputRef.current?.value){
            dispatch(setUserId(inputRef.current?.value))
            // dispatch(setSelectedCategory);
        }
    }
return( 
    <div className='container'>
       <h1 className='pos'>WELCOME</h1>
        <div className='txt'>
      <TextField inputRef={inputRef}
      inputProps={{style: {fontSize: 18}}}
      InputLabelProps={{style: {fontSize: 11 }}}
            style={{ marginTop: -250,marginLeft:10}}
            label="Enter Username" 
            variant="outlined" 
            required />    
              {/* { <TextField
            select
            label="Select Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            variant="outlined"
            style={{ marginTop: -200,marginLeft:10}}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField> } */}
           <select value={selectedCategory} onChange={handleChange}>
      <option value="">Select Category</option>
      {Categories.map((item) => (
        <option key={item.categoryid} value={item.categoryid}>
          {item.category}
        </option>
      ))}
    </select>

<div className='start'>
    <Button className='btn' onClick={startQuiz}>Start Quiz</Button>
</div>
 </div>  
</div>
)
}


