const { importar } = require('./collectibles');

// Crear una variable por cada una de las marcas, invocando a la función importar
const hotToys = importar('1');
const bandai = importar('2');
const starWars = importar('3');

// Crear un único array con todas las listas de las marcas de las figuras coleccionables
const unifiedCollectibles = [...hotToys, ...bandai, ...starWars];

// Crear objeto literal con las funcionalidades solicitadas
const collectibles = {
  figuras: unifiedCollectibles,
  listFigures() {
    this.figuras.forEach(figura => {
      console.log('Marca: ', figura.marca);
      console.log('Nombre: ', figura.nombre);
      console.log('Precio: $', figura.precio);
      console.log('Stock: ', figura.stock);
      console.log('-----------------------');
    });
  },
  figuresByBrand(brand) {
    return this.figuras.filter(figura => figura.marca === brand);
  }
};

// Comprobar las funcionalidades
console.log('--- Todas las figuras ---');
console.table(collectibles.figuras);

console.log('--- Figuras de Hot Toys ---');
console.table(collectibles.figuresByBrand('Hot Toys'));

console.log('--- Figuras de Bandai ---');
console.table(collectibles.figuresByBrand('Bandai'));

console.log('--- Figuras de Star Wars ---');
console.table(collectibles.figuresByBrand('Star Wars'));
