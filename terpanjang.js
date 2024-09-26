const sentence = "Saya sangat senang mengerjakan soal algoritma";

function cariTerpanjang(kalimat) {
  let tempPanjang = "";
  let kalArr = kalimat.split(" ");
  for (let i = 0; i < kalArr.length; i++) {
    if (kalArr[i].length > tempPanjang.length) {
      tempPanjang = kalArr[i];
    }
  }
  console.log(tempPanjang + ": " + tempPanjang.length + " character");
}
cariTerpanjang(sentence);
