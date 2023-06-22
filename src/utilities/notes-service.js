// utilities/notes-service.js

// Example data representing notes
let notes = [
    { id: 1, text: 'Note 1', createdAt: new Date() },
    { id: 2, text: 'Note 2', createdAt: new Date() },
    { id: 3, text: 'Note 3', createdAt: new Date() },
  ];
  
  // Function to fetch notes from the server
  export const getNotes = () => {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous API call
      setTimeout(() => {
        resolve(notes);
      }, 500);
    });
  };
  
  // Function to add a new note to the server
  export const addNote = (text) => {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous API call
      setTimeout(() => {
        const newNote = {
          id: Date.now(),
          text,
          createdAt: new Date(),
        };
        notes.push(newNote);
        resolve(newNote);
      }, 500);
    });
  };
  