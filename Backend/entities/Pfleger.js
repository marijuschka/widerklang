class Pfleger {

    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
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

}