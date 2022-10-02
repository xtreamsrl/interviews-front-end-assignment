import { useState } from 'react';

import styles from './AddFavouriteButton.module.scss';

const AddFavouriteButton = ({ addPostHandler }) => {
  const [isAdd, setIsAdd] = useState(false);

  const addHandler = () => {
    addPostHandler();

    setIsAdd(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        {!isAdd ? (
          <button className={styles.btn} onClick={addHandler}>
            Add Favourite
          </button>
        ) : (
          <p>Added!</p>
        )}
      </div>
    </div>
  );
};

export default AddFavouriteButton;
