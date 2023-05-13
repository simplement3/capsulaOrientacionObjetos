class Persona {
    _rut;
    _nombre;
    _apellido;

    constructor(rut = 'Sin rut', nombre = 'Sin nombre', apellido = 'Sin apellido') {
        this._rut = rut;
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get rut() {
        return `${this._rut}`;
    }

    set rut(rut) {
        this._rut = rut;
    }

    get nombre() {
        return `${this._nombre}`.toUpperCase;
    }

    set nombre(nombre) {
        const regex = new RegExp(/[a-z]/, 'gi');
        if (regex.test(nombre)) {
            this.nombre = nombre;
        }
    }

    get apellido(){
        return `${this._apellido}`;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    caminar = () => {
        console.log(`la persona ${this._nombre} ${this._apellido} se encuentra caminando`);
    }

    detenerse = () => {
        console.log(`la persona ${this._nombre} ${this._apellido} se encuentra detenida`);
    }
}

const personaUno = new Persona ('11111111-1', 'Nicolas', 'Gonzalez');
const personaDos = new Persona ('22222222-2', 'Marcos', 'Ojeda');
const personaTres = new Persona ('33333333-3', 'Lucas', 'Gonzalez');
const personaCuatro = new Persona ('44444444-4', 'Florencia', 'Kunz');

console.log(personaUno._nombre);
console.log(personaDos._nombre);
console.log(personaTres._nombre);
console.log(personaCuatro._nombre);

personaUno.caminar();
personaUno.detenerse();

personaDos.caminar();
personaDos.detenerse();

personaTres.caminar();
personaTres.detenerse();

console.log(personaUno, personaDos, personaTres, personaCuatro);

personaUno.nombre = '40';
console.log(personaUno.nombre);
personaUno.nombre = 'Joaquin';
console.log(personaUno.nombre);