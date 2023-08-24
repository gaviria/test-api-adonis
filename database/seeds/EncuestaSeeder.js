"use strict";

/*
|--------------------------------------------------------------------------
| EncuestaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Database = use("Database");

class EncuestaSeeder {
  async run() {
    // const encuestas = await Database.table("encuestas");
    // await Factory.model("App/Models/Encuesta").createMany(30);
    // console.log(encuestas);
  }
}

module.exports = EncuestaSeeder;
