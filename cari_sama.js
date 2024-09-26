let INPUT = ["xc", "dz", "bbb", "dz"];
let QUERY = ["bbb", "ac", "dz"];

function cariSama(input, query) {
  let hasil = [];
  for (let i = 0; i < query.length; i++) {
    let sama = 0;

    for (let j = 0; j < input.length; j++) {
      if (query[i] == input[j]) {
        sama++;
      }
    }
    hasil.push(sama);
  }

  console.log(hasil);
}

cariSama(INPUT, QUERY);
