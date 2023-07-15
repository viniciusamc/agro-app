/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("notes", (table) => {
    table.increments("id");
    table.string("title").notNullable();
    table.string("description").notNullable();
    table.timestamp("cerated_at").defaultTo(knex.fn.now());
    table.boolean("status").defaultTo(false);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("notes");
};
