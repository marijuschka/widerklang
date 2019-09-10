class Angehoeriger {

    constructor(id, name, email, mmd_id) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.mmd_id = mmd_id;
    }
    setId(id){
        this.id = id;
    }  
    getId(){
        return this.id;
    } 
    setName(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    setEmail(email){
        this.email = email;
    }
    getEmail(){
        return this.email;
    }
    setMmD_id(mmd_id){
        this.mmd_id = mmd_id;
    }
    getMmD_id(){
        return this.mmd_id;
    }
}

module.exports = Angehoeriger;