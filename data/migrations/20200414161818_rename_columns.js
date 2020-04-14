
exports.up = function(knex) {
    return knex.schema.table('cars', tbl => {
        tbl.dropColumn('transmission type');
        tbl.dropColumn('status of the title');
        tbl.string('transmission_type');
        tbl.string('status_of_the_title');
    })
};

exports.down = function(knex) {
  
};
