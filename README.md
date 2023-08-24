# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Comando para instalar blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.

### Migrations

Comando para migraciones.

```js
adonis migration:run
```

## API Reference

Todas las url de encuestas necesitan el JWT generado al registrarse o hacer login como usuario.

#### Registro de usuario.

POST http://127.0.0.1:3333/api/v1/registro

```bash
{
    "email": "a@a.com",
    "password": "123456"
}
```

#### Login de usuario.

POST http://127.0.0.1:3333/api/v1/login

```bash
{
    "email": "a@a.com",
    "password": "123456"
}
```

#### Listar datos de Encuestas paginadas.

GET http://127.0.0.1:3333/api/v1/encuestas/:page

#### Crear datos para Encuesta de usuario.

POST http://127.0.0.1:3333/api/v1/encuesta

```bash
{
    "identificacion_cliente": "1047365220",
    "modelo_automovil": "mazda",
    "factores_compra": "La reputación de la marca",
    "calificacion_prueba": 5,
    "calificacion_satisfaccion": 5
}
```

#### Editar Encuesta de usuario.

PATCH http://127.0.0.1:3333/api/v1/encuesta/:id

```bash
{
    "identificacion_cliente": "1047365250",
    "modelo_automovil": "mazda",
    "factores_compra": "La reputación de la marca",
    "calificacion_prueba": 4,
    "calificacion_satisfaccion": 5
}
```

#### Eliminar Encuestas.

DELETE http://127.0.0.1:3333/api/v1/encuesta/:id
