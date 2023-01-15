import { useDispatch } from 'react-redux';
import { deleteNote } from '../redux/notes/noteSlice';

const NoteItem = ({ note }) => {
  const dispatch = useDispatch();

  const handleDeleteNote = () => {
    console.log('Clicked Delete');
    dispatch(deleteNote(note._id));
  };

  return (
    <div className='note'>
      <div>{new Date(note.createdAt).toLocaleString('en-US')}</div>
      <h2>{note.note}</h2>
      <button onClick={handleDeleteNote} className='close'>
        X
      </button>
    </div>
  );
};

export default NoteItem;
