class Produk {
  #nama;
  #harga;

  constructor(nama, harga) {
    this.#nama = nama;
    this.#harga = harga;
  }

  tampilkan() {
    document.write(this.#nama + " - Rp " + this.#harga);
  }
}

// Membuat object pertama
const p1 = new Produk("Buku Tulis", 5000);
p1.tampilkan();

// Membuat object kedua
const p2 = new Produk("Pensil", 3000);
p2.tampilkan();