import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import PostField from '../Crud/PostField.js'
import { addPost } from "../common/PostSlice"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import SendIcon from '@mui/icons-material/Send';
import Fab from '@mui/material/Fab'
import { Link } from "react-router-dom";

const CreatePost = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [values, setValues] = useState({
    title: '',
    body: ''
  })

  const handleAddPost = () => {
    setValues({ title: '', body: '' })
    dispatch(addPost({
      userId: " ",
      parentId: "",
      id: uuidv4(),
      title: values.title,
      body: values.body
    }))
    navigate('/');
  }  

  return (
    <>    
      <Box component="form"
        sx={{
          '& .MuiTextField-root': { m: 3, width: '80%', heigth:'80%',},
        }}
        noValidate
        autoComplete="off"
      >
        <PostField        
          defaultValue="Normal"
          label="Title"
          inputProps={{ type: 'text', placeholder: 'Title' }}
          value={values.title}
          onChange={(e) => setValues({ ...values, title: e.target.value })}
        />
        <PostField
          id="outlined-size-normal"
          defaultValue="Normal"
          label="TEXT"
          inputProps={{ type: 'text', placeholder: "text" }}
          value={values.body}
          onChange={(e) => setValues({ ...values, body: e.target.value })}
        /><br/>
        <button className="btn"  onClick={handleAddPost} ><Link  className="btn-send" to="/createpost">GO!</Link></button>
        </Box>
      </>
      )
}
export default CreatePost
