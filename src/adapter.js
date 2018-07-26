class Adapter {
  static fetchNotes() {
    return fetch('http://localhost:3000/api/v1/users')
      .then( r => r.json() )
  }

  static fetchNoteBy(id) {
    return fetch(`http://localhost:3000/api/v1/notes/${id}`)
      .then( r => r.json() )
  }

  static createNote(note) {
    return fetch('http://localhost:3000/api/v1/notes', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })
      .then( r => r.json() )
  }
}
