const store = {users: [], notes: []}

document.addEventListener('DOMContentLoaded', init)

function init() {
  Adapter.fetchNotes().then( r => {
    document.querySelector('#title-user').innerText = r[0].name
    r[0].notes.forEach(Controller.renderPreview)
  })

}
