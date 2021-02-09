exports.up = async function (knex) {
  await knex.schema.dropTableIfExists("m_game");
  await knex.schema.createTable("m_game", (table) => {
    table.increments("game_id").primary();
    table.string("game_name", 45);
    table.text("game_logo");
    table.enu("game_is_active", ["0", "1"]); //l for active
    table.integer("created_by").defaultTo();
    table.integer("updated_by").defaultTo();
    table.datetime("created_at").defaultTo(knex.fn.now());
    table.datetime("updated_at").defaultTo(knex.fn.now());
  });

  await knex("m_game").insert([
    {
      game_name: "Logo Quiz",
      game_logo: "image",
      game_is_active: "1",
    },
    {
      game_name: "Image Quiz",
      game_logo: "image",
      game_is_active: "1",
    },
    {
      game_name: "Maths Quiz",
      game_logo: "image",
      game_is_active: "1",
    },
    {
      game_name: "Tic Tac Toe",
      game_logo: "image",
      game_is_active: "1",
    },
  ]);
};

exports.down = async function (knex) {
  await knex.schema.dropTable("m_game");
};
