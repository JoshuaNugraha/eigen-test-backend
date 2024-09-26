const matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];

function hitungDiagonal(matrix) {
  let length = matrix.length;
  let jumlahSatu = 0;
  let jumlahDua = 0;

  for (let i = 0; i < length; i++) {
    jumlahSatu = jumlahSatu + matrix[i][i];
    jumlahDua = jumlahDua + matrix[i][length - 1 - i];
  }

  let hasil = jumlahSatu - jumlahDua;
  console.log(jumlahSatu + " - " + jumlahDua + " = " + hasil);
}

hitungDiagonal(matrix);
