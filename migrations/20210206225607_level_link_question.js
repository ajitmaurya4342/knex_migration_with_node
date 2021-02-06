
exports.up = async function (knex) {

    await knex.schema.createTable("m_level_link_question", (table) => {
        table.increments("level_q_id").primary();
        table.integer("level_id", 11);
        table.integer("question_id", 11);
        table.enu("level_q_is_active", ["0", "1"]);//l for active 
        table.integer("created_by").defaultTo();
        table.integer("updated_by").defaultTo();
        table.datetime("created_at").defaultTo(knex.fn.now());
        table.datetime("updated_at").defaultTo(knex.fn.now());
    });
};
exports.down = async function (knex) {
    await knex.schema.dropTable("m_level_link_question");
};
