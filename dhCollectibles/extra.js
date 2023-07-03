const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [posicion0, , posicion2, , posicion4, ...restoNumeros] = numeros;

console.log('Posición 0:', posicion0);
console.log('Posición 2:', posicion2);
console.log('Posición 4:', posicion4);
console.log('Resto de los números:', [numeros[1], numeros[3], ...restoNumeros]);


const mascota = {
    nombre: 'Bony',
    tipo: 'Perro',
    color: 'Dorado',
    raza: 'Golden retriever'
  };
  
  const { nombre, tipo, color, raza } = mascota;
  
  console.log(`Hola, les presento a mi mascota. Su nombre es: ${nombre}, es un hermoso ${tipo}, de color: ${color} y su raza es: ${raza}.`);