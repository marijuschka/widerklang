class User {

    constructor(id, username, email, password, role) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
        this.mmd_id = mmd_id;
    }

    setId(id) {
        this.id = id;
    }

    getId() {
        return this.id;
    }

    setUsername(username) {
        this.username = username;
    }

    getUsername() {
        return this.username;
    }

    setEmail(email) {
        this.email = email;
    }

    getEmail() {
        return this.email;
    }

    setPassword(password) {
        this.password = password;
    }

    getPassword() {
        return this.password;
    }

    setRole(role) {
        this.role = role;
    }

    getRole() {
        return this.role;
    }
    getMmdID() {
        return this.mmd_id;
    }
    setMmdID(mmd_id){
        this.mmd_id = mmd_id;
    }

}

module.exports = User;