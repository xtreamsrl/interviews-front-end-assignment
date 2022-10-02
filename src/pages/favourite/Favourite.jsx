import { useSelector } from 'react-redux';
import { selectFavouritePosts } from '../../store/slice/slicePost';

import { SinglePost } from '../../components';
import { BsArrowLeft } from 'react-icons/bs';

import styles from './Favourite.module.scss';

const Favourite = () => {
  const posts = useSelector(selectFavouritePosts);
  console.log(posts);

  return (
    <div className={styles.container}>
      <div className={styles.backhome}>
        <BsArrowLeft size={22} />
        <p>
          <a href='/'>Back Home</a>{' '}
        </p>
      </div>

      <h1>My Favourite posts</h1>

      {posts.length === 0 ? (
        <div className={styles.info}>
          <p>No Posts saved.</p>
        </div>
      ) : (
        <div>
          {posts.map((post) => (
            <SinglePost
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
              userId={post.userId}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourite;
