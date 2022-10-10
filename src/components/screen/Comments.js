import React, {useState} from 'react'
import '../../index.css'

const Comments = (props) => {
  
    return (
      <div key={props.id} className='box-comment' >
        <div className='img-box-c'>{props.id}</div>
        <div className='title-c'>{props.name}</div>  
        <div className='box-body-c'>{props.body}</div>        
      </div>    
  )
}

export default Comments
