import PaginationItem from '@mui/material/Pagination';
import styles from './Pagination.module.scss';

export default function Pagination({ onChangePage }) {
  const handlePageChange = (_, page) => {
    onChangePage(page);
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
