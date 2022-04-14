import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store.js';

const ColumnForm = props => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addColumn({title, icon, listId: props.listId}));
    setTitle('');
    setIcon('');
 };

  const dispatch = useDispatch();

	return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      Title: <TextInput value={title} onChange={e => setTitle(e.target.value)} /> 
      Icon: <TextInput value={icon} onChange={e => setIcon(e.target.value)} />
      <Button>Add column</Button>
    </form>
	);
};

export default ColumnForm;