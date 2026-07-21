class Mahasiswa {
  nama;

  belajar() {
    document.write("Sedang belajar");
  }
}

const mhs = new Mahasiswa();
mhs.nama = "Budi";

document.write(mhs.nama); // Budi
mhs.belajar();         // Sedang belajar