import React, { Component } from 'react'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

class Main extends Component {
  constructor() {
    super()
    this.state = {
      currentNote: this.blankNote(),
      notes: [],
    }
  }

  blankNote = () => {
    return {
      id: null,
      title: '',
      body: '',
    }
  }

  setCurrentNote = (note) => {
    this.setState({ currentNote: note })
  }

  resetCurrentNote = () => {
    this.setCurrentNote(this.blankNote())
  }

  deleteNote = () => {
    const notes = [...this.state.notes]

    const i = notes.findIndex(note => note.id === this.state.currentNote.id)
    if(i >-1){
        notes.splice(i,1)
        this.setState({ notes })
    }
    
    this.resetCurrentNote
    

    
}

  saveNote = (note) => {
    const notes = [...this.state.notes]

    if (note.id) {
      
        
      const i = notes.findIndex(currentNote => currentNote.id === note.id)
      notes[i] = note
    } else {
      // new note
      note.id = Date.now()
      notes.push(note)
    }
    localStorage.setItem('notes', JSON.stringify(notes))
    this.setState({ notes, currentNote: note })
  }

  render() {
    return (
      <div
        className="Main"
        style={style}
      >
        <Sidebar resetCurrentNote={this.resetCurrentNote} />
        <NoteList
          notes={this.state.notes}
          setCurrentNote={this.setCurrentNote}
        />
        <NoteForm
          currentNote={this.state.currentNote}
          saveNote={this.saveNote}
          deleteNote = {this.deleteNote}
        />
      </div>
    )
  }
}

const style = {
  display: 'flex',
  height: '100vh',
  alignItems: 'stretch',
}

export default Main