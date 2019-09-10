
exports.up = function(knex) {
  return knex.schema.createTable('fruits', tbl => {
      tbl.increments();
      tbl
        .string('name', 128)
        .unique()
        .notNullable();
        tbl.decimal('avgWeighOz')
        tbl.boolean('delicious');
  })
};

exports.down = function(knex) {
  
};
