import React, { useState } from 'react'
//import axios from 'axios'
//import{useEffect} from 'react'
import Pagination from './Pagination'
import Postbox from '../Crud/Postbox'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import '../../index.css'


const Posts = () => {

  const [currentPage, setcurrentPage] = useState(1)
  const [postsPerPage, setpostsPerPage] = useState(10)
  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const posts = useSelector(store => store.posts)
  const postDesc =[...posts.posts].sort((a,b) => b.id -a.id)
  const getPosts = [...postDesc].map(post => { return <Postbox key={post.id} id={post.id} title={post.title} body={post.body} /> })


  /*
  const [postsData, setpostsData] = useState([])
  useEffect(async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    )
    setpostsData(response.data)
  },[])
  
  when to use this, change the postsData and set, to getPosts*/

  const currentPost = getPosts.slice(firstPostIndex, lastPostIndex)


  return (
    <div className='container'>
      <Pagination totalPosts={getPosts.length} setpostsPerPage={setpostsPerPage} postsPerPage={postsPerPage} currentPage={currentPage} setCurrentPage={setcurrentPage} />
      <Link className='add-btn' to="/createpost"><div>Create your post</div></Link>
      <br/>
      {currentPost}
    </div>
  )
}

export default Posts
