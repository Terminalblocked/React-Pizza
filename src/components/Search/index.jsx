import React from 'react';
import styles from './Search.module.scss';
import debounce from 'lodash.debounce';
import searchIcon from '../../assets/img/search-icon.svg';
import clearIcon from '../../assets/img/x-icon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filterSlice';

export default function Search() {
  const dispatch = useDispatch();
  const value = useSelector(state => state.filter.searchValue)
  const inputRef = React.useRef();

  const onInputClear = () => {
    dispatch(setSearchValue(''));
    inputRef.current.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 250),
    [],
  );

  const onChangeInput = (event) => {
    dispatch(setSearchValue(event.target.value))
    updateSearchValue(event.target.value);
  };


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
      {value && (
        <img onClick={onInputClear} className={styles.clear} src={clearIcon} alt="clearIcon" />
      )}
    </div>
  );
}
