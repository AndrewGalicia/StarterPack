import { useState, useEffect } from 'react';
import { addNote, getNotes } from '../../utilities/notes-service.js';

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const fetchedNotes = await getNotes(); // Implement the getNotes function to fetch notes from the server
      setNotes(fetchedNotes);
    } catch (error) {
      console.error('Error retrieving notes:', error);
    }
  };

  const handleAddNote = async () => {
    try {
      const createdNote = await addNote(newNote); // Implement the addNote function to add a new note to the server
      setNotes([...notes, createdNote]);
      setNewNote('');
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  return (
    <div>
      {notes.length === 0 ? (
        <p>No Notes Yet!</p>
      ) : (
        <ul>
          {notes.map((note) => (
            <li key={note._id}>
              <p>{note.text}</p>
              <p>{new Date(note.createdAt).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
      <input
        type="text"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        placeholder="Enter a new note"
      />
      <button onClick={handleAddNote}>Add Note</button>
    </div>
  );
}