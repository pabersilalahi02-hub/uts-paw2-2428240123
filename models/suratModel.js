let tourPackages = [
  {
    id: 1,
    name: "Paket Wisata Bali Exotis",
    destination: "Bali",
    price: 3500000,
    duration: "4 Hari 3 Malam",
    quota: 15
  },
  {
    id: 2,
    name: "Explore Jogja Istimewa",
    destination: "Yogyakarta",
    price: 1800000,
    duration: "3 Hari 2 Malam",
    quota: 20
  }
];

class TourModel {
  static getAll() {
    return tourPackages;
  }

  static getById(id) {
    return tourPackages.find(pkg => pkg.id === id);
  }

  static create(data) {
    const newPackage = {
      id: tourPackages.length > 0 ? tourPackages[tourPackages.length - 1].id + 1 : 1,
      ...data
    };
    tourPackages.push(newPackage);
    return newPackage;
  }

  static update(id, data) {
    const index = tourPackages.findIndex(pkg => pkg.id === id);
    if (index === -1) return null;

    tourPackages[index] = { ...tourPackages[index], ...data };
    return tourPackages[index];
  }

  static delete(id) {
    const index = tourPackages.findIndex(pkg => pkg.id === id);
    if (index === -1) return null;

    const deleted = tourPackages.splice(index, 1);
    return deleted[0];
  }
}

module.exports = TourModel;