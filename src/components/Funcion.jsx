class funcion{

    expresion = "";

    constructor ( expresion ){
        this.expresion = expresion;
    }

    evaluar( x ) {
        return eval(this.expresion)
    }

}