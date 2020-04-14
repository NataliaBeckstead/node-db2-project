
exports.up = function(knex) {
    return knex.schema.alterTable('cars', tbl => {
        tbl.dropColumn('make');
    })
};

exports.down = function(knex) {
    return knex.schema.alterTable('cars', tbl => {
        tbl.string('make').notNullable().defaultTo('unknown');
    })
};
