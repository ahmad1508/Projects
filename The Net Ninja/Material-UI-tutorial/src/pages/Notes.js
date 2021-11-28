import React, { useEffect, useState } from 'react';
import { Grid, Container } from '@material-ui/core';
import NoteCard from '../components/NoteCard'
import Masonry from 'react-masonry-css';

export default function Notes() {

  const [notes, setNotes] = useState([]);

  /* we wait for data fetch to complete then aplly .json method 
  on fetch() to transform to redeable data */
  useEffect(async () => {
    const res = await fetch('http://localhost:8000/notes');
    const data = await res.json();
    console.log(data);
    setNotes(data);
  }, [])

  const handleDelete = async (id) => {
    await fetch('http://localhost:8000/notes/' + id, {
      method: 'DELETE'
    })
    const newNotes = notes.filter(note => note.id != id);
    setNotes(newNotes)
  }
  const breakPoint = {
    default : 3,
    1100:2,
    700: 1
  }
  return (
    <Container>
      <Masonry
        breakpointCols={breakPoint}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map(note => (
          <div key={note.id}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
    </Container>
  )
}
