
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments('id');
        tbl.string('VIN').notNullable().unique().index();
        tbl.string('make').notNullable();
        tbl.string('model').notNullable();
        tbl.integer('mileage').notNullable();
        tbl.string('transmission_type');
        tbl.string('status_of_the_title');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
