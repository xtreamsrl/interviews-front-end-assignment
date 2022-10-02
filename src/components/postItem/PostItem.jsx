import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addFavourite } from '../../store/slice/favouriteSlice';

import styles from './PostItem.module.scss';

const PostItem = ({ post, id, name, email, body }) => {
  const shortenText = (text, n) => {
    if (text.length > n) {
      const shortendText = text.substring(0, n).concat('...');
      return shortendText;
    }
    return text;
  };

  const dispatch = useDispatch();

  const addToFavourite = (post) => {
    dispatch(addFavourite(post));
  };

  return (
    <div className={styles.card}>
      <div className={styles.grid}>
        <div className={styles.content}>
          <div className={styles.details}>
            <h3>{shortenText(name, 10)}</h3>
            <p>{shortenText(body, 30)}</p>
          </div>

          <p className={styles.body}>{email}</p>

          <div className={styles.buttons}>
            <button className={styles.btn} onClick={() => addToFavourite(post)}>
              Save
            </button>
            <Link to={`/single-post/${id}`}>
              <button className={styles.btn}>Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
