import React from 'react';
import styles from './Search.module.scss';
import debounce from 'lodash.debounce';
import searchIcon from '../../assets/img/search-icon.svg';
import clearIcon from '../../assets/img/x-icon.svg';
import { SearchContext } from '../../App';

export default function Search() {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);
  const [value, setValue] = React.useState('')
  const inputRef = React.useRef();


  const onInputClear = () => {
    setSearchValue('');
    inputRef.current.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 500),
    [],
  );

  const onChangeInput = (event) => {
    setValue(event.target.value)
    updateSearchValue(event.target.value)
  }

  return (
    <div className={styles.root}>
      <img className={styles.icon} src={searchIcon} alt="searchIcon" />
      <input
        ref={inputRef}
        onChange={(e) => onChangeInput(e)}
        value={value}
        className={styles.input}
        type="text"
        placeholder="Поиск пиццы..."
      />
      {searchValue && (
        <img onClick={onInputClear} className={styles.clear} src={clearIcon} alt="clearIcon" />
      )}
    </div>
  );
}
