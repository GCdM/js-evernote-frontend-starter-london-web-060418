const store = {users: [], notes: []}

document.addEventListener('DOMContentLoaded', init)

function init() {
  Adapter.fetchNotes()
    .then( r => {
      document.querySelector('#title-user').innerText = r[0].name
      document.querySelector('#title-user').dataset.id = r[0].id
      document.querySelector('#new-note').addEventListener('click', Controller.renderNewForm)
      r[0].notes.forEach(Controller.renderPreview)
    })

}
