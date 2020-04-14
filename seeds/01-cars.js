
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          id: 1,
          VIN: "1HGCM82633A004352",
          make: "Hyundai",
          model: "accent",
          mileage: 1000,
          transmission_type: null,
          status_of_the_title: null
        },
        {
          id: 2,
          VIN: "4HGCM82783A004352",
          make: "Toyota",
          model: "corolla",
          mileage: 1240,
          transmission_type: null,
          status_of_the_title: null
        }
      ]);
    });
};
