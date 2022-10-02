import { useDispatch } from 'react-redux';
import { postAction } from '../../store/slice/slicePost';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './SinglePost.module.scss';

const SinglePost = ({ title, id, body }) => {
  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(postAction.deleteFavouritePost(id));
    toast.success('Post removed successfully');
  };

  return (
    <div className={styles.container_post}>
      <div className={styles.card}>
        <div className={styles.title_body}>
          <h2>{title}</h2>
          <h3>{body}</h3>
        </div>

        <div className={styles.card_btn_info}>
          <button className={styles.btn} onClick={removeHandler}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
