
exports.up = function(knex) {
  return knex.schema.createTable('comments', function (table) {
      table.increments();
      table.string('comment').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('comments');
};
