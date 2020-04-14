exports.up = function(knex) {
    return knex.schema.table('cars', tbl => {
        tbl.dropColumn('transmission type');
        tbl.dropColumn('status of the title');
    })
};

exports.down = function(knex) {
    return knex.schema.table('cars', tbl => {
        tbl.string('transmission type');
        tbl.string('status of the title');
    })
};
