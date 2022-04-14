import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { updateSearchstring } from '../../redux/store.js';

const SearchForm = () => {

  const [searchString, setSearchString] = useState('');
  
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateSearchstring({ searchString }));
    setSearchString('');
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateSearchstring({searchString: ''}))
  }, []);

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput value={searchString} onChange={e => setSearchString(e.target.value)} placeholder="Search..." />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;