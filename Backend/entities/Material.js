class Material {

    constructor(id, name, description, path, type, generic) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.path = path;
        this.type = type;
        this.generic = generic;
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
    setDescription(des){
        this.description = des;
    }
    getDescription(){
        return this.description;
    }
    setPath(path){
        this.path = path;
    }
    getPath(){
        return this.path;
    }
    setType(type){
        this.type = type;
    }
    getType(){
        return this.type;
    }
    setGeneric(generic){
        this.generic = generic;
    }
    getGeneric(){
        return this.generic;
    }


}