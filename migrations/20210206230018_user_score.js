
exports.up = async function (knex) {
    await knex.schema.dropTable("user_level_score");


    await knex.schema.createTable("user_level_score", (table) => {
        table.increments("user_ls_id").primary();
        table.integer("level_id", 11);
        table.integer("user_id", 11);
        table.integer("level_score", 11);
        table.integer("level_out_of", 11);
        table.enu("score_is_active", ["0", "1"]);//l for active 
        table.integer("created_by").defaultTo();
        table.integer("updated_by").defaultTo();
        table.datetime("created_at").defaultTo(knex.fn.now());
        table.datetime("updated_at").defaultTo(knex.fn.now());
    });
};
exports.down = async function (knex) {
    await knex.schema.dropTable("user_level_score");
};
