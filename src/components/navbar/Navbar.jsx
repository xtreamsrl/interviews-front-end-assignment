import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';

import styles from './Navbar.module.scss';
import { FiXCircle } from 'react-icons/fi';
import { FaBars } from 'react-icons/fa';
import { selectTotalQuantity } from '../../store/slice/slicePost';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handlemenu = () => {
    setIsMobile(!isMobile);
  };

  const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : '');

  const totalQuantity = useSelector(selectTotalQuantity);

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <a className={styles.logo} href='/'>
          Blog
        </a>

        <ul className={isMobile ? `${styles['nav-links-mobile']}` : `${styles.links}`}>
          <NavLink to='/add-post' className={activeLink}>
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
