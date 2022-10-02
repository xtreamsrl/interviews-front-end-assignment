import { useDispatch, useSelector } from 'react-redux';
// import { selectFavouritePosts } from '../../store/slice/postSlice';

import { BsArrowLeft } from 'react-icons/bs';

import styles from './Favourite.module.scss';

import {
  removeFvouritePost,
  selectPostFavourite,
  selectTotalFavourite,
} from '../../store/slice/favouriteSlice';

const Favourite = () => {
  const posts = useSelector(selectPostFavourite);
  const quantity = useSelector(selectTotalFavourite);

  console.log(posts);

  const dispatch = useDispatch();

  const removePost = (post) => {
    dispatch(removeFvouritePost(post));
  };

  return (
    <div className={styles.container}>
      <div className={styles.backhome}>
        <BsArrowLeft size={22} />
        <p>
          <a href='/posts'>Back Home</a>{' '}
        </p>
      </div>

      <div className={styles.section}>
        {posts.length === 0 ? (
          <p className={styles.not_found}>No post saved.</p>
        ) : (
          <>
            {posts.map((post) => {
              const { name, body, email, id } = post;
              return (
                <div className={styles.card} key={id}>
                  <h2>{name}</h2>
                  <h4>{body}</h4>
                  <p>{email}</p>

                  <div>
                    <button className={styles.btn} onClick={() => removePost(post)}>
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Favourite;
