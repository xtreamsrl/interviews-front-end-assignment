import styles from './SinglePost.module.scss';

import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { db } from '../../firebase/config';
import { BsArrowLeft } from 'react-icons/bs';
import Loader from '../loader/Loader';

const SinglePost = () => {
  const { id } = useParams();

  const [post, setPost] = useState(false);

  const getPost = async () => {
    const docRef = doc(db, 'posts', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const obj = {
        id: id,
        ...docSnap.data(),
      };
      setPost(obj);
    } else {
      toast.error('Post not found.');
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <section>
      <div className={styles.backhome}>
        <BsArrowLeft size={22} />
        <p>
          <a href='/posts'>Back Home</a>{' '}
        </p>
      </div>

      {post === false ? (
        <Loader />
      ) : (
        <div className={styles.container_post}>
          <div className={styles.card}>
            <h3 className={styles.title_body}>{post.name}</h3>
            <h4 className={styles.title_body}>{post.body}</h4>
            <h4 className={styles.title_body}>{post.email}</h4>
          </div>
        </div>
      )}
    </section>
  );
};

export default SinglePost;
