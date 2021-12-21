export class LoginModel{
    private nombreUsuario:string;
    private password:string;

    constructor(nombreUsuario:string, password:string){
        this.nombreUsuario = nombreUsuario;
        this.password = password;

    }

    petNombreUsuario(){
        return this.nombreUsuario;

    }

    getPassword(){
        return this.password;
    }
}
