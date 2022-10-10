import React from 'react'

const PostField = ({ label, inputProps, onChange, value }) => {
  return (
    <div className=''>
      <label className='postbox-label'>{label}</label>
      <input 
        className='box-edit'
        {...inputProps}
        onChange={onChange}
        value={value}
      />
    </div>
  )
}

export default PostField
