import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { postAction } from '../../store/slice/slicePost';

import styles from './Posts.module.scss';
import moment from 'moment/moment';
import { BsCalendarCheck } from 'react-icons/bs';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FiEdit, FiXCircle } from 'react-icons/fi';

import { ShowButton, Loader } from '../index';

import axios from 'axios';
import AddFavouriteButton from '../addFavouriteButton/AddFavouriteButton';
import { Link } from 'react-router-dom';

const Posts = ({ post, title, body, userId, id }) => {
  const [show] = useState(false);
  const [showComment, setShowComment] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const isComment = post.comment;

  const dispatch = useDispatch();

  const addPostHandler = () => {
    dispatch(
      postAction.addPostToFavourite({
        id,
        title,
        body,
        userId,
      })
    );

    toast.success("'Post Added Successfully.'");
  };

  const deletePost = () => {
    dispatch(postAction.deletPost(id));
    toast.success("'Post Deleted Successfully.");
  };

  const fetchAllDataPost = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);

      const data = response.data;

      setShowComment(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllDataPost();
  }, []);

  return (
    <div>
      <div className={styles.close_icon}>
        {isComment && <FiXCircle size={30} onClick={deletePost} />}
      </div>
      <div className={styles.title}>
        <h2>{title}</h2>
      </div>

      <div className={styles.body}>
        <h3>{body}</h3>

        <div className={styles.data}>
          <div>
            <BsCalendarCheck />
          </div>
          <p>
            <span>{moment().format('LLLL')}</span>
          </p>
        </div>
        <div className={styles.edit_icon}>
          {isComment && (
            <Link to={`/edit/${id}`}>
              <FiEdit />
            </Link>
          )}
        </div>
      </div>

      <div className={styles.buttons}>
        {isComment === undefined && (
          <div>
            {!isLoading ? (
              <ShowButton isLoading={isLoading} showComment={showComment} id={id} show={show} />
            ) : (
              <Loader />
            )}
          </div>
        )}
        <div>{<AddFavouriteButton addPostHandler={addPostHandler} />}</div>
      </div>
    </div>
  );
};

export default Posts;
