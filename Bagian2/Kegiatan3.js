class Produk {
  #nama;
  #harga;
  #stok;

  constructor(nama, harga, stok) {
    this.#nama = nama;
    this.#harga = harga;
    this.#stok = stok;
  }

  // Getter
  get stok() {
    return this.#stok;
  }

  // Setter
  set stok(nilai) {
    if (nilai >= 0) {
      this.#stok = nilai;
    } else {
      document.write("Stok tidak boleh negatif!<br>");
    }
  }

  // Method menampilkan data
  tampilkan() {
    document.write(
      this.#nama + " - Rp " + this.#harga + " | Stok: " + this.#stok + "<br>"
    );
  }

  // Menambah stok
  tambahBarang(jumlah) {
    if (jumlah > 0) {
      this.#stok += jumlah;
      document.write(jumlah + " barang berhasil ditambahkan.<br>");
    } else {
      document.write("Jumlah harus lebih dari 0.<br>");
    }
  }

  // Mengurangi stok
  kurangiBarang(jumlah) {
    if (jumlah > 0 && jumlah <= this.#stok) {
      this.#stok -= jumlah;
      document.write(jumlah + " barang berhasil dikurangi.<br>");
    } else {
      document.write("Stok tidak mencukupi atau jumlah tidak valid.<br>");
    }
  }
}

// Object 1
const p1 = new Produk("Buku Tulis", 5000, 10);

// Object 2
const p2 = new Produk("Pensil", 3000, 20);

// Pengujian Object 1
document.write("<b>=== Produk 1 ===</b><br>");
p1.tampilkan();

p1.tambahBarang(5);
p1.tampilkan();

p1.kurangiBarang(8);
p1.tampilkan();

p1.kurangiBarang(20); // Gagal

document.write("<br>");

// Pengujian Object 2
document.write("<b>=== Produk 2 ===</b><br>");
p2.tampilkan();

p2.tambahBarang(10);
p2.tampilkan();

p2.kurangiBarang(15);
p2.tampilkan();

// Menggunakan setter
p2.stok = 50;
document.write("Stok baru produk 2: " + p2.stok + "<br>");

p2.stok = -5; // Gagal