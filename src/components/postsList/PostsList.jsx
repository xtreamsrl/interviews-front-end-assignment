import React, { useEffect, useState } from 'react';

import styles from './PostsList.module.scss';

import { useDispatch, useSelector } from 'react-redux';

import useFetchCollection from '../../customHook/useFetchCollection';

import { selectPosts, storeProducts } from '../../store/slice/postSlice';
import PostItem from '../postItem/PostItem';
import Loader from '../loader/Loader';
import Pagination from '../pagination/pagination';

const PostsList = () => {
  const { data, isLoading } = useFetchCollection('posts');

  ///////////////////////////////////////////////////////////////////
  // PAGINATION STATE

  const posts = useSelector(selectPosts);

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentProduct = posts.slice(indexOfFirstPost, indexOfLastPost);

  //////////////////////////////////////////////////////////////////

  //
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      storeProducts({
        posts: data,
      })
    );
  }, [data, dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles['posts-list']} id='posts'>
        <div className={styles.top}>
          <div className={styles.info}>
            <p>
              <b>{posts.length}</b> Post Found.
            </p>
          </div>
        </div>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.grid}>
          {posts.length === 0 ? (
            <p>No post found.</p>
          ) : (
            <>
              {currentProduct.map((post) => {
                return (
                  <div key={post.id}>
                    <PostItem {...post} post={post} />
                  </div>
                );
              })}
            </>
          )}
        </div>
      )}
      <Pagination
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalPosts={posts.length}
      />
    </div>
  );
};

export default PostsList;
