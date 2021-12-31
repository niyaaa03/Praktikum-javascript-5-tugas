const img = document.querySelector('.image');
let hasil = document.querySelector('.hasil');

const daftarImage = {
  img1: './gallery/kelinci.jpg',
  img2: './gallery/kucing lucu.jpg',
  img3: './gallery/landak.jpg',
  img4: './gallery/marmut.jpg',
  img5: './gallery/panda.jpg',
  img6: './gallery/hamster.jpg',
};

const { img1, img2, img3, img4, img5, img6 } = daftarImage;

img.addEventListener('change', () => {
  for (const i in daftarImage) {
    if (img.value == i) {
      alert(`Gambar ${daftarImage[i]}`);
      hasil.innerHTML = `<img src="${daftarImage[i]}" />`;
    }
  }
});
