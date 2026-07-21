class Rekening {
  #saldo;

  constructor() {
    this.#saldo = 0;
  }

  setor(jumlah) {
    this.#saldo += jumlah;
  }

  tarik(jumlah) {
    if (jumlah <= this.#saldo) {
      this.#saldo -= jumlah;
    } else {
      document.write("Saldo tidak cukup");
    }
  }

  getSaldo() {
    return this.#saldo;
  }
}

// Contoh penggunaan
const rekening = new Rekening();

rekening.setor(100000);
document.write(rekening.getSaldo()); // 100000

rekening.tarik(30000);
document.write(rekening.getSaldo()); // 70000

rekening.tarik(80000); // Saldo tidak cukup
document.write(rekening.getSaldo()); // 70000