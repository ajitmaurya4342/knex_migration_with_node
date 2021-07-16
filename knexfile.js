// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host: "3.109.1.38",
      database: "quiz",
      password: "Ajit6649$$",
      user: "ajit1",
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      database: 'shops',
      password: '',
      user: 'root'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
