import { useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { postAction, selectPost } from '../../store/slice/slicePost';

import styles from './EditPost.module.scss';

const EditPost = () => {
  const params = useParams();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const oldFields = useSelector(selectPost);
  const existingPost = oldFields.filter((post) => post.id === params.id);
  const { title, body } = existingPost[0];

  const [values, setValues] = useState({
    title,
    body,
  });

  const handleEditPost = (e) => {
    setValues({ title: '', body: '' });

    dispatch(
      postAction.editPost({
        id: params.id,
        title: values.title,
        body: values.body,
      })
    );
    navigate('/');
    toast.success('Post Edited with Successfully!');
  };
  return (
    <div className={styles.container}>
      <div className={styles.backhome}>
        <BsArrowLeft size={22} />
        <p>
          <a href='/'>Back Home</a>{' '}
        </p>
      </div>

      <h1>Edit post</h1>

      <div>
        <div className={styles.form}>
          <label htmlFor='addTitle'>Title</label>

          <input
            autoFocus
            type='text'
            name='title'
            required
            value={values.title}
            onChange={(e) => setValues({ ...values, title: e.target.value })}
          />

          <label htmlFor='text' name='body'>
            Text
          </label>

          <textarea
            name='body'
            cols='30'
            rows='10'
            value={values.body}
            onChange={(e) => setValues({ ...values, body: e.target.value })}
          ></textarea>

          <button
            className={styles.btn}
            onClick={handleEditPost}
            type='submit'
            aria-label='Add Post'
          >
            Edit Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPost;
