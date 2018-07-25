class User {
  constructor(name) {
    this.name = name

    store.users.push(this)
  }
}
