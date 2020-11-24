import React from 'react';
import styles from './picture.css';

export function Picture() {
  return (
      <div className={styles.preview}>
          <img className={styles.previewImg} src="https://cdn.dribbble.com/users/1803663/screenshots/14559453/media/bc840fdd9f236d3e99772a73a4dde9e3.jpg" alt=""/>
      </div>
  );
}
