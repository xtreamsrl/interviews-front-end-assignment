import { deleteDoc, doc } from 'firebase/firestore';
//
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectPosts, storeProducts } from '../../store/slice/postSlice';
import { useSelector } from 'react-redux';

import useFetchCollection from '../../customHook/useFetchCollection';

import { Loader, Pagination } from '../../components';

import styles from './Home.module.scss';
import { toast } from 'react-toastify';
import { db } from '../../firebase/config';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Notiflix from 'notiflix';

const Home = () => {
  const { data, isLoading } = useFetchCollection('posts');
  //
  const dispatch = useDispatch();

  const posts = useSelector(selectPosts);

  useEffect(() => {
    dispatch(
      storeProducts({
        posts: data,
      })
    );
  }, [data, dispatch]);

  ///////////////////////////////////////////////////////////////////
  // PAGINATION STATE

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentProduct = posts.slice(indexOfFirstPost, indexOfLastPost);

  //////////////////////////////////////////////////////////////////

  const deletePost = async (id) => {
    try {
      await deleteDoc(doc(db, 'posts', id));
      toast.success('Post deleted successfully.');
    } catch (error) {
      toast.error(error.message);
    }
  };

  //Notiflix
  const confirmDelete = (id) => {
    Notiflix.Confirm.show(
      'Delete Post',
      'You are about to delete this post?',
      'Delete',
      'Cancel',
      function okCb() {
        deletePost(id);
      },
      function cancelCb() {
        console.log('');
      },
      {
        width: '320px',
        borderRadius: '8px',
        titleColor: 'orangered',
        okButtonBackground: 'orangered',
        cssAnimationStyle: 'zoom',
      }
    );
  };

  return (
    <>
      {isLoading && <Loader />}
      <div className={styles.table}>
        <h2>Resume posts</h2>

        {posts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>E-mail</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentProduct.map((post) => {
                const { id, name, email } = post;

                return (
                  <tr key={id}>
                    <td>{name}</td>
                    <td>{email}</td>

                    <td className={styles.icons}>
                      <Link to={`/add-post/${id}`}>
                        <FaEdit size={20} color='green' />
                      </Link>
                      &nbsp; &nbsp;
                      <FaTrash size={20} color='red' onClick={() => confirmDelete(id)} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        <Pagination
          postPerPage={postPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          totalPosts={posts.length}
        />
      </div>
    </>
  );
};

export default Home;
