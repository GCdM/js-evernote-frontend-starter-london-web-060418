class Controller {

  static renderPreview(note) {
    const preview = document.createElement('li')
    preview.addEventListener('click', Controller.renderNote)
    preview.id = `${note.id}`
    preview.innerHTML=`<h6>${note.title}</h6>`
    document.getElementById('preview-list').append(preview)
  }

  static clearMain() {
    document.querySelector('#main-content').innerHTML = ""
  }

  static renderNote(e) {
    Controller.clearMain()
    const noteId = e.target.parentNode.id

    Adapter.fetchNoteBy(noteId)
      .then(Controller.createNote)
      .then(r => document.querySelector('#main-content').append(r))
  }

  static createNote(note) {
    const newNote = document.createElement('div')

    newNote.innerHTML = `
      <h2 class="text-center">${note.title}</h2>
      <p>${note.body}</p>
    `

    return newNote
  }

  static renderNewForm(e) {
    Controller.clearMain()

    const form = document.createElement('div')

    form.innerHTML = `
      <h2 class="text-center">Create a new Note</h2>
      <form id="new-form">
        <label for="title-input">Title</label><br>
        <input id="title-input" name="title" type="text">
        <br><br>
        <label for="body-input">Content</label><br>
        <textarea id="body-input" name="body" type="new-form"></textarea>
        <br>
        <input type="submit" value="Submit">
      </form>
    `

    form.addEventListener('submit', Controller.newNote)
    document.querySelector('#main-content').append(form)
  }

  static newNote(e) {
    e.preventDefault()
    const userId = document.querySelector('#title-user').dataset.id

    Adapter.createNote({
      title: e.target.title.value,
      body: e.target.body.value,
      user_id: userId
    })
      .then( r => {
        console.log(r)
        Controller.renderPreview(r)
        Controller.clearMain()
        document.querySelector('#main-content').append(Controller.createNote(r))
      })
  }
}
