
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments('id');
        tbl.string('VIN').notNullable().unique().index();
        tbl.string('make').notNullable();
        tbl.string('model').notNullable();
        tbl.integer('mileage').notNullable();
        tbl.string('transmission type');
        tbl.string('status of the title');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExist('cars');
};
