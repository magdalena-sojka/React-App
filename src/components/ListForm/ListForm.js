import styles from './ListForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listsReducer.js';
import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';

const ListForm = props => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addList({title, description}));
    setTitle('');
    setDescription('');
 };

  const dispatch = useDispatch();

	return (
    <form onSubmit={handleSubmit} className={styles.listForm}>
      Title: <TextInput value={title} onChange={e => setTitle(e.target.value)} /> 
      Description: <TextInput value={description} onChange={e => setDescription(e.target.value)} />
      <Button>Add list</Button>
    </form>
	);
};

export default ListForm;