import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Posts, Loader, Pagination } from '../../components';
import { selectPost } from '../../store/slice/slicePost';

import styles from './Home.module.scss';
import { toast } from 'react-toastify';

const Home = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const arr = useSelector(selectPost);

  ///////////////////////////////////////////////////////////////////
  //PAGINATION STATE
  const totalPosts = Object.keys(allPosts).length;

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentProduct = allPosts.slice(indexOfFirstPost, indexOfLastPost);

  let listPosts = arr.concat(currentProduct);
  ///////////////////////////////////////////////////////////////////

  const fetchAllPosts = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);

      const data = response.data;

      setIsLoading(false);
      setAllPosts(data);
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong...');
    }
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

  return (
    <div className={styles.container}>
      <h1>All Posts</h1>

      <div>
        <div>
          {!isLoading ? (
            listPosts.map((post) => {
              const { body, id, title, userId, comments } = post;

              return (
                <div key={id} className={styles.posts}>
                  <Posts
                    post={post}
                    title={title}
                    body={body}
                    id={id}
                    userId={userId}
                    comments={comments}
                  />
                </div>
              );
            })
          ) : (
            <Loader />
          )}
        </div>
        <Pagination
          postPerPage={postPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          totalPosts={totalPosts}
        />
      </div>
    </div>
  );
};

export default Home;
