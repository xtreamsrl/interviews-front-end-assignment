import { useState } from 'react';

import styles from './ShowButton.module.scss';

const ShowButton = ({ showComment }) => {
  const [show, setShow] = useState(false);

  const showHandler = () => {
    setShow(!show);
  };

  const comments = showComment.map((comment) => {
    const { body, email, id, name } = comment;
    return (
      <div key={id}>
        <div className={styles.card}>
          <h2>
            {' '}
            <span>Name:</span> {name}
          </h2>
          <h4>{body}</h4>

          <div className={styles.email}>
            <p>
              {' '}
              <span>E-mail:</span> {email}
            </p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={showHandler}>
        Show Comment
      </button>
      {show && <div>{comments}</div>}
    </div>
  );
};

export default ShowButton;
