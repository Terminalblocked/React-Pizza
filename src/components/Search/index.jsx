import React from 'react'
import styles from './Search.module.scss';
import searchIcon from '../../assets/img/search-icon.svg';
import clearIcon from '../../assets/img/x-icon.svg';
import { SearchContext } from '../../App';

export default function Search() {
  const {searchValue, setSearchValue} = React.useContext(SearchContext);

  return (
    <div className={styles.root}>
      <img className={styles.icon} src={searchIcon} alt="searchIcon" />
      <input
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        className={styles.input}
        type="text"
        placeholder="Поиск пиццы..."
      />
      {searchValue && (
        <img
          onClick={() => setSearchValue('')}
          className={styles.clear}
          src={clearIcon}
          alt="clearIcon"
        />
      )}
    </div>
  );
}
