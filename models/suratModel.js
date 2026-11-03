let suratPackages = [
  {
    nosurat : "001/SI/X/2026",
    perihal: "Surat Laporan Keuangan ",
    jumlahLampiran : 3,
    sifat: "biasa",
    pengirim: "Bendahara Keuangan ",
    bagianId : 11,
    createdAt : "3 November 2026"
  },
  {
    nosurat : "002/SI/X/2026",
    perihal: "Surat Laporan Kesiswaan ",
    jumlahLampiran : 4,
    sifat: "isi",
    pengirim: "Sekretaris",
    bagianId : 15,
    createdAt : "3 November 2026"
  },
    {
    nosurat : "003/SI/X/2026",
    perihal: "Surat Laporan",
    jumlahLampiran : 6,
    sifat: "penting",
    pengirim: "Rektor",
    bagianId : 14,
    createdAt : "3 November 2026"
  },
];

class SuratModel {
  static getAll() {
    return suratPackages;
  }

  static getById(id) {
    return suratPackages.find(pkg => pkg.id === id);
  }

  static create(data) {
    const newPackage = {
      nosurat: suratPackages.length > 0 ? suratPackages[suratPackages.length - 1].id + 1 : 1,
      ...data
    };
    suratPackages.push(newPackage);
    return newPackage;
  }

  static update(nosurat, perihal) {
    const index = suratPackages.findIndex(pkg => pkg.id === id);
    if (index === -1) return null;

    suratPackages[index] = { ...suratPackages[index], ...data };
    return suratPackages[index];
  }

  static delete(id) {
    const index = suratPackages.findIndex(pkg => pkg.id === id);
    if (index === -1) return null;

    const deleted = suratPackages.splice(index, 1);
    return deleted[0];
  }
}

module.exports = SuratModel;