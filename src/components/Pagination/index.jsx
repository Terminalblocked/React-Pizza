import React from 'react';
import PaginationItem from '@mui/material/Pagination';
import styles from './Pagination.module.scss';


export default function Pagination({ setCurrentPage }) {
  const handlePageChange = (_, page) => {
    setCurrentPage(page);
  };
  return (
    <div className={styles.root}>
      <PaginationItem
        onChange={handlePageChange}
        className={styles.root}
        count={3}
        color="primary"
      />
    </div>
  );
}
