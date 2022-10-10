import React, { useState } from 'react'
import '../../index.css'
import Commentsarray from '../../Arrays/Comments'
import Comments from '../screen/Comments'
import { Link } from 'react-router-dom'
import { deletePost } from '../common/PostSlice'
import { useDispatch } from 'react-redux'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import '../../index.css'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

const Postbox = (props, comment) => {

  const dispatch = useDispatch()
  const handleRemovePost = (id) => { dispatch(deletePost({ id: id })) }
  const commentpost = Commentsarray.filter(comment => props.id === comment.postId)
    .map(comment => <Comments id={comment.id} name={comment.name} body={comment.body} />)


  return (
    <div key={props.id} className="box-post">
      <div className='img-box'><PermIdentityIcon/></div>
      <div className='title'>{props.title}</div>
      <div className='box-body'>{props.body}</div>
      <div className='btn-edit'>
        <div className='' >
          <Link to={`updatepost/${props.id}`}><EditIcon /></Link>
        </div>
        <div className='btn-del'>
          <DeleteIcon onClick={() => handleRemovePost(props.id)} />
        </div>
      </div>
      <div className='seecomments' >SEE COMMENTS
        <div className='box-comments'>{commentpost}</div>
      </div>
    </div>
  )
}
export default Postbox
