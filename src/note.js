class Note {
  constructor(noteObj) {
    this.title = noteObj.title
    this.body = noteObj.obj

    store.notes.push(this)
  }
}
