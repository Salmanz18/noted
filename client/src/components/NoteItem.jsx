const NoteItem = ({ note }) => {
  return (
    <div className='note'>
      <div>{new Date(note.createdAt).toLocaleString('en-US')}</div>
      <h2>{note.note}</h2>
    </div>
  );
};

export default NoteItem;
