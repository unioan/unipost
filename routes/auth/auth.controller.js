const credentials = {
 login: "admin",
 password: "admin"
}

function formAuthUser(login, password) {
 return credentials.login === login && credentials.password === password
}

module.exports = { formAuthUser }