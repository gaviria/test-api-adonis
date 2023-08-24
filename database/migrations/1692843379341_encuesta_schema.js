"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class EncuestaSchema extends Schema {
  up() {
    this.create("encuestas", (table) => {
      table.increments();
      table.string("identificacion_cliente", 80).notNullable().unique();
      table.string("modelo_automovil", 80).notNullable();
      table.string("factores_compra", 80).notNullable();
      table.integer("calificacion_prueba", 80).notNullable();
      table.integer("calificacion_satisfaccion", 80).notNullable();
      table.integer("user_id").unsigned().references("id").inTable("users");
      table.timestamps();
    });
  }

  down() {
    this.drop("encuestas");
  }
}

module.exports = EncuestaSchema;
