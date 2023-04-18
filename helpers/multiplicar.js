const fs = require("fs");
const colors = require("colors");
const crearArchivo = async (base = 5, listar, hasta = 10) => {
  try {
    console.log("==========================");
    console.log(`     Tabla del ${colors.blue(base)}`);
    console.log("==========================");

    let salida = "";
    let consola = "";
    for (let i = 1; i <= hasta; i++) {
      consola += `${base} ${"x".green} ${i} ${"=".green} ${base * i}\n`;
      salida += `${base} x ${i} = ${base * i}\n`;
    }
    console.log({ listar });
    if (listar) console.log(consola);

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `tabla-${base}.txt`;
  } catch (e) {
    throw e;
  }
};

module.exports = {
  crearArchivo,
};

// fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
//   if (err) throw err;
//   console.log(`Tabla del ${base} creado`);
// });

// const crearArchivo = (base = 5) => {
//   return new Promise((res, rej) => {
//     console.log("==========================");
//     console.log(`     Tabla del ${base}`);
//     console.log("==========================");

//     let salida = "";
//     for (let i = 1; i <= 10; i++) {
//       salida += `${base} x ${i} = ${base * i}\n`;
//     }
//     console.log(salida);

//     fs.writeFileSync(`tabla-${base}.txt`, salida);
//     res(`tabla-${base}.txt`);
//   });
// };
