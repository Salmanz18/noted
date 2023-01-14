import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNote } from '../redux/notes/noteSlice';

const NoteForm = () => {
  const [note, setNote] = useState('');

  const dispatch = useDispatch();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    dispatch(createNote({ note }));
    setNote('');
  };

  return (
    <section className='form'>
      <form onSubmit={handleOnSubmit}>
        <div className='form-group'>
          <label htmlFor='note'>Note</label>
          <input
            className='form-control'
            type='text'
            name='note'
            id='note'
            text='note'
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-block'>
          Add Note
        </button>
      </form>
    </section>
  );
};

export default NoteForm;
