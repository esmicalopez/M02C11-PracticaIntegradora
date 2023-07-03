function importar(marca) {
  const fs = require('fs');
  const path = require('path');

  const filePath = path.join(__dirname, 'datos', `figuras${marca}.json`);
  const rawData = fs.readFileSync(filePath);
  const figuras = JSON.parse(rawData);

  return figuras;
}

module.exports = { importar };
