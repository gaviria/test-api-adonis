"use strict";
const Encuesta = use("App/Models/Encuesta");
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with encuestas
 */
class EncuestaController {
  /**
   * Show a list of all encuestas.
   * GET encuestas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, auth }) {
    const user = await auth.getUser();
    return await user.encuestas().fetch();
  }

  async indexAll({ request, response, auth, params }) {
    const user = await auth.getUser();
    const { page } = params;
    console.log(page);
    return await Encuesta.query().paginate(page, 10);
  }

  /**
   * Render a form to be used for creating a new encuesta.
   * GET encuestas/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  // async create ({ request, response, view }) {
  // }

  /**
   * Create/save a new encuesta.
   * POST encuestas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response, auth }) {
    const user = await auth.getUser();
    const encuesta = new Encuesta();

    encuesta.fill(request.all());
    await user.encuestas().save(encuesta);

    return encuesta;
  }

  /**
   * Display a single encuesta.
   * GET encuestas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {}

  /**
   * Render a form to update an existing encuesta.
   * GET encuestas/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  // async edit ({ params, request, response, view }) {
  // }

  /**
   * Update encuesta details.
   * PUT or PATCH encuestas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response, auth }) {
    const user = await auth.getUser();
    const { id } = params;
    const encuesta = await Encuesta.findOrFail(id);
    encuesta.merge(request.all());
    await encuesta.save();
    return { message: "Encuesta actualizada", data: encuesta };
  }

  /**
   * Delete a encuesta with id.
   * DELETE encuestas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const user = await auth.getUser();
    const { id } = params;
    const encuesta = await Encuesta.findOrFail(id);
    await encuesta.delete();
    return { message: "Encuesta eliminada", data: encuesta };
  }
}

module.exports = EncuestaController;
