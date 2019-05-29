require('dotenv').config()

module.exports = {
  development: {
    "username": "root",
    "password": null,
    "database": "bamazon",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  test: {
    "username": "root",
    "password": null,
    "database": "bamazon",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  production: {
    "username": "root",
    "password": null,
    "database": "bamazon",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "use_env_variable": JAWSDB_URL
  }
}
