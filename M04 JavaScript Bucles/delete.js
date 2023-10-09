function obtenerMayor(x, y) {
    // "x" e "y" son números enteros.
    // Retornar el número más grande.
    // Si son iguales, retornar cualquiera de los dos.
    // Tu código:
    var mayor = 0;
    for (i=0; i<x; i++){
       mayor = mayor + 1;
    }
    if (mayor>y){
       return x;
    }else if (mayor===y){
       return x||y;
    }else{
       return y;
    }
 }
console.log(obtenerMayor(10,1));