import { useState } from 'react';

import { addDoc, setDoc, doc, collection, Timestamp } from 'firebase/firestore';
import { db } from '../../firebase/config';

import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { selectPosts } from '../../store/slice/postSlice';
import { useSelector } from 'react-redux';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './AddPost.module.scss';
import { BsArrowLeft } from 'react-icons/bs';

import { Loader } from '../../components';

const AddPost = () => {
  const { id } = useParams();

  const initialState = {
    name: '',
    body: '',
    email: '',
  };

  const posts = useSelector(selectPosts);
  const postEdit = posts.find((item) => item.id === id);

  const [post, setPost] = useState(() => {
    const newState = detectForm(id, { ...initialState }, postEdit);
    return newState;
  });

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  function detectForm(id, f1, f2) {
    if (id === 'ADD') {
      return f1;
    }
    return f2;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const addPost = (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const docRef = addDoc(collection(db, 'posts'), {
        name: post.name,
        body: post.body,
        email: post.email,
        createdAt: Timestamp.now().toDate(),
      });
      setIsLoading(false);
      setPost({ ...initialState });
      toast.success('Post added successfully.');

      navigate('/');
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  const editPost = (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      setDoc(doc(db, 'posts', id), {
        name: post.name,
        email: post.email,
        body: post.body,
        createdAt: postEdit.createdAt,
        editedAt: Timestamp.now().toDate(),
      });

      setIsLoading(false);
      toast.success('Product Edited Successfully');
      navigate('/');
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  ////////////////////////////////////////////

  return (
    <>
      {isLoading && <Loader />}
      <div className={styles.container}>
        <div className={styles.backhome}>
          <BsArrowLeft size={22} />
          <p>
            <a href='/'>Back Home</a>{' '}
          </p>
        </div>

        <h1>{detectForm(id, 'Add New Post', 'Edit Post')}</h1>

        <div>
          <form className={styles.form} onSubmit={detectForm(id, addPost, editPost)}>
            <label htmlFor='addTitle'>Post Title</label>

            <input
              type='text'
              placeholder='Post title'
              name='name'
              value={post.name}
              onChange={(e) => handleInputChange(e)}
            />

            <label htmlFor='addEmail'>E-mail</label>
            <input
              type='text'
              name='email'
              placeholder='Add Email'
              // required
              value={post.email}
              onChange={(e) => handleInputChange(e)}
            />

            <label htmlFor='text' name='body'>
              Text
            </label>

            <textarea
              name='body'
              cols='30'
              rows='10'
              placeholder='Write your post...'
              value={post.body}
              onChange={(e) => handleInputChange(e)}
            ></textarea>

            <button className={styles.btn} type='submit' aria-label='Add Post'>
              {detectForm(id, 'Add Post', 'Edit Post')}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddPost;
