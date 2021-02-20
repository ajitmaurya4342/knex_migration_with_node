
exports.up = async function (knex) {
    await knex.schema.createTable("user_score", (table) => {
        table.increments("user_score_id").primary();
        table.string("user_id", 45);
        table.text("game_id");
      =table.integer("user_points");
    });





};

exports.down = async function (knex) {

};
