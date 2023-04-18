const argv = require("./config/yargs");
const { crearArchivo } = require("./helpers/multiplicar");

require("colors");

console.clear();
crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo.rainbow, "creado"))
  .catch((error) => console.log(error));

// const [, , arg3 = "base=5"] = process.argv;
// const [, base = 5] = arg3.split("=");
