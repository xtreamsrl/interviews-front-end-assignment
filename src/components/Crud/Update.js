import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import PostField from '../Crud/PostField.js'
import { editPost } from "../common/PostSlice";
import PostStorage from "../../Arrays/Postsarray";


const Update = () => {
  const params = useParams()  
  const dispatch = useDispatch()
  const getPosts = useSelector(store => store.posts)
  const navigate = useNavigate()     
  const existingPost = getPosts.posts.filter(post => post.id === parseInt(params.id))
  const {title, body} = existingPost[0]
  const [values, setValues] = useState({title, body})
  const handleUpdate = () => {
    setValues({ name: '', body: '' })
    dispatch(editPost({
      id: params.id,
      title: values.title,
      body: values.body
    }));
    navigate('/');    
  }

  return (    
    <div className="">
      <PostField
      label="TITLE"
      inputProps={{ type: 'text', placeholder: 'Title' }}
      value={values.title}
      onChange={(e) => setValues({ ...values, title: e.target.value })}
      /><br/>
      <PostField
      label="TEXT"
      inputProps={{ type: 'text', placeholder: 'Yout text here' }}
      value={values.body}
      onChange={(e) => setValues({ ...values, body: e.target.value })}
      />
      <button className="btn-send" onClick={handleUpdate}>Update</button>
      
    </div>
  )
}

export default Update
