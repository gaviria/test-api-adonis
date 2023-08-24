"use strict";
const User = use("App/Models/User");

class UserController {
  async store({ request, response }) {
    const { email, password } = request.all();
    const user = await User.create({ username: email, email, password });
    return response.status(201).json({ message: "Usuario creado", data: user });
    //return this.login(...arguments);
  }

  async login({ request, auth, response }) {
    const { email, password } = request.all();
    const token = await auth.attempt(email, password);
    return response.status(200).json({ token });
  }

  async logOut({ request, response, auth }) {
    const apiToken = auth.getAuthHeader();
    await auth.authenticator("api").revokeTokens([apiToken]);
    return response.json({ message: "Logged out" });
  }
}

module.exports = UserController;
