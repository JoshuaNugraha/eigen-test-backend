let kata = "NEGIE1";

// pakai reserve
function balikReserve(word) {
  let hasil = word.split("").reverse().join("");
  return hasil;
}

// manual
function balikManual(word) {
  let hasil = "";
  for (let i = word.length - 1; i >= 0; i--) {
    hasil += word[i];
  }
  return hasil;
}

console.log("Reserve = " + balikReserve(kata));
console.log("Manual = " + balikManual(kata));
