import React from 'react';
import styles from './styles.module.css';

export default function YouTube({videoId, title}) {
  return (
    <div className={styles.videoWrapper}>
      <iframe
        className={styles.video}
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title || 'Vidéo YouTube'}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
