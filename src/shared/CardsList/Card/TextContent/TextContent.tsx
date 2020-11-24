import React from 'react';
import styles from './textcontent.css';

export function TextContent() {
  return (
      <div className={styles.textContent}>
           <div className={styles.metaData}>
               <div className={styles.userLink}>
                   <img className={styles.avatar}
                       src="http://taxor.ru/avatar/large/priklyucheniya_buratino/kot_bazilio.jpg"
                       alt="avatar"
                  />
                  <a href="#user-url" className={styles.username}>Вася Васин</a>
              </div>
              <span className={styles.createdAt}>
                  <span className={styles.publishedLabel}>опубликовано </span>
                  4 часа назад
              </span>
          </div>
          <h2 className={styles.title}>
              <a href="#post-url" className={styles.postLink}>
                  Следует отметить, что новая модель организационной деятельности поможет
              </a>
          </h2>
      </div>
  );
}
