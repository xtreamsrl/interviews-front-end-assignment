import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { postAction } from '../../store/slice/slicePost';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from '@reduxjs/toolkit';

import styles from './AddPost.module.scss';
import { BsArrowLeft } from 'react-icons/bs';

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const newPost = {
    title: title,
    body: body,
    id: nanoid(),
    comment: '',
    date: new Date().toISOString(),
  };

  const addNewPost = () => {
    const post = { ...newPost };
    dispatch(postAction.postAdd(post));
    toast.success('Post Added with Successfully!');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title && !body) {
      return;
    }
    addNewPost(title, body);

    setTitle('');
    setBody('');
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <div className={styles.backhome}>
        <BsArrowLeft size={22} />
        <p>
          <a href='/'>Back Home</a>{' '}
        </p>
      </div>

      <h1>Add post</h1>

      <div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor='addTitle'>Title</label>

          <input
            autoFocus
            type='text'
            name='title'
            placeholder='Add Title'
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor='text' name='body'>
            Text
          </label>

          <textarea
            name='body'
            cols='30'
            rows='10'
            placeholder='Write your post...'
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>

          <button className={styles.btn} type='submit' aria-label='Add Post'>
            Add Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
