class Adapter {
  static fetchNotes() {
    return fetch('http://localhost:3000/api/v1/users')
    .then( r => r.json() )
  }
}
