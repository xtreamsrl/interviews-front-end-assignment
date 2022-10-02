import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';

import styles from './Navbar.module.scss';
import { FiXCircle } from 'react-icons/fi';
import { FaBars } from 'react-icons/fa';
import { selectPostFavourite } from '../../store/slice/favouriteSlice';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const post = useSelector(selectPostFavourite);
  const item = post.map((q) => q.totalQuantity);

  const totalQuantity = item.length;

  const handlemenu = () => {
    setIsMobile(!isMobile);
  };

  const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : '');

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <a className={styles.logo} href='/'>
          Blog
        </a>

        <ul className={isMobile ? `${styles['nav-links-mobile']}` : `${styles.links}`}>
          <a href='/'>
            <li>Resume</li>
          </a>

          <NavLink to='/posts/' className={activeLink}>
            <li>Posts</li>
          </NavLink>

          <NavLink to='/add-post/ADD' className={activeLink}>
            <li>Add Post</li>
          </NavLink>

          <NavLink to='/favourite' className={activeLink}>
            <li>Favourite: {totalQuantity}</li>
          </NavLink>
        </ul>

        <button className={styles['mobile-menu-icon']} onClick={handlemenu}>
          {isMobile ? <FiXCircle /> : <FaBars />}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
